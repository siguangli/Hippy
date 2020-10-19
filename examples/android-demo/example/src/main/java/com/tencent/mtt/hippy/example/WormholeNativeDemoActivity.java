package com.tencent.mtt.hippy.example;

import android.app.Activity;
import android.os.Bundle;
import android.support.v7.widget.DividerItemDecoration;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.text.TextUtils;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.widget.TextView;

import com.tencent.mtt.hippy.common.HippyMap;
import com.tencent.mtt.hippy.views.wormhole.HippyWormholeManager;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;


import static com.tencent.mtt.hippy.views.wormhole.HippyWormholeManager.WORMHOLE_WORMHOLE_ID;

public class WormholeNativeDemoActivity extends Activity {
  private RecyclerView mRecyclerView;
  private JSONArray mDatas = new JSONArray();
  private HomeAdapter mAdapter;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    getWindow().requestFeature(Window.FEATURE_NO_TITLE);
    setContentView(R.layout.activity_wormhole_native);
    initData();
    mRecyclerView = (RecyclerView) findViewById(R.id.id_recyclerview);
    mRecyclerView.setLayoutManager(new LinearLayoutManager(this));
    mAdapter = new HomeAdapter();
    mRecyclerView.setAdapter(mAdapter);
    mRecyclerView.addItemDecoration(new DividerItemDecoration(this, LinearLayoutManager.VERTICAL));

  }

  protected void initData() {
    for (int i = 0; i < 40; i++) {
      try {
        JSONObject jsonObject = new JSONObject();
        if (i == 3 || i == 11 || i == 19 || i == 23 || i == 31) {
          jsonObject.put("type", 2);
          jsonObject.put("title", "[广告]--Nike,永不止步！");
          jsonObject.put("templateType", 2);
          jsonObject.put("coverUrl", "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=878011181,1009590567&fm=26&gp=0.jpg");
          jsonObject.put("wormholeId", HippyWormholeManager.getInstance().generateWormholeId());
        } else if(i == 7 || i == 15 || i == 27 || i == 35){
          jsonObject.put("type", 2);
          jsonObject.put("title", "[广告]--腾讯公司！");
          jsonObject.put("templateType", 1);
          jsonObject.put("wormholeId", HippyWormholeManager.getInstance().generateWormholeId());
        } else {
          jsonObject.put("type", 1);
          jsonObject.put("title", "海关总署：驻休斯敦总领馆全体馆员核酸阴性");
        }
        jsonObject.put("index", i);
        mDatas.put(jsonObject);
      } catch (JSONException e) {
        e.printStackTrace();
      }
    }
  }

  public static final  int VIEW_TYPE_NATIVE = 1;
  public static final  int VIEW_TYPE_WORMHOLE = 2;

  public HippyMap getWormholeHippyMap(int position){
    JSONObject tempData = null;
    try {
      tempData = (JSONObject) mDatas.get(position);
    } catch (JSONException e) {
      e.printStackTrace();
    }
    HippyMap hippyMap = new HippyMap();
    HippyMap data = new HippyMap();
    if (!TextUtils.isEmpty(tempData.optString("coverUrl"))) {
      data.pushString("coverUrl", tempData.optString("coverUrl"));
    }
    data.pushInt("templateType", tempData.optInt("templateType"));
    data.pushString("title", tempData.optString("title"));
    data.pushInt("type", 6);
    hippyMap.pushObject("data", data);
    String wormholeId = tempData.optString("wormholeId");
    hippyMap.pushString(WORMHOLE_WORMHOLE_ID, wormholeId);
    return hippyMap;
  }

  public String getWormholeId(int position){
    JSONObject tempData = null;
    try {
      tempData = (JSONObject) mDatas.get(position);
    } catch (JSONException e) {
      e.printStackTrace();
    }
    String wormholeId = tempData.optString("wormholeId");
    return wormholeId;
  }

  public class HomeAdapter extends RecyclerView.Adapter<RecyclerView.ViewHolder> {

    @Override
    public int getItemViewType(int position) {
      try {
        if (((JSONObject) mDatas.get(position)).optInt("type") == 2) {
          return VIEW_TYPE_WORMHOLE;
        } else {
          return VIEW_TYPE_NATIVE;
        }
      } catch (Exception e) {

      }
      return VIEW_TYPE_NATIVE;
    }

    @Override
    public RecyclerView.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
      if(viewType == VIEW_TYPE_NATIVE){
        NativeItemViewHolder holder = new NativeItemViewHolder(LayoutInflater.from(
          WormholeNativeDemoActivity.this).inflate(R.layout.activity_native_item,parent,
          false));
        return holder;
      } else {
        MagicDivItemViewHolder holder = new MagicDivItemViewHolder(HippyWormholeManager.getInstance().onNativeCreateWormholeParent(WormholeNativeDemoActivity.this));
        return holder;
      }
    }

    @Override
    public void onBindViewHolder(final RecyclerView.ViewHolder viewHolder, int position) {
      if (getItemViewType(position) ==  VIEW_TYPE_WORMHOLE) {
        //wormhole,
        if (!((MagicDivItemViewHolder) viewHolder).isCreated) {
          ((MagicDivItemViewHolder) viewHolder).isCreated = true;
        } else {
          ((ViewGroup) viewHolder.itemView).removeAllViews();
        }
        HippyWormholeManager.getInstance().onNativeBindItemView(getWormholeId(position), viewHolder.itemView, getWormholeHippyMap(position));
      } else {
        //native
        NativeItemViewHolder nativeItemViewHolder = (NativeItemViewHolder) viewHolder;
        try {
          nativeItemViewHolder.mTextView.setText(((JSONObject)mDatas.get(position)).optString("title")+((JSONObject)mDatas.get(position)).opt("index"));
        } catch (JSONException e) {
          e.printStackTrace();
        }
      }
    }

    @Override
    public int getItemCount() {
      return mDatas.length();
    }



    class NativeItemViewHolder extends RecyclerView.ViewHolder {

      private TextView mTextView;

      public NativeItemViewHolder(View itemView) {
        super(itemView);
        mTextView = (TextView) itemView.findViewById(R.id.id_num);
      }
    }

    class MagicDivItemViewHolder extends RecyclerView.ViewHolder {
      public boolean isCreated;

      public MagicDivItemViewHolder(View itemView) {
        super(itemView);
      }
    }
  }

}

