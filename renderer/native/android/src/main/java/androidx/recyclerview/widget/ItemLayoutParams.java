package androidx.recyclerview.widget;

import android.view.View;
import androidx.recyclerview.widget.RecyclerView.LayoutParams;

/**
 * Created on 2021/3/17.
 * Description
 */
public interface ItemLayoutParams {

    void getItemLayoutParams(int position, LayoutParams lp);

    void getItemLayoutParams(View itemView, LayoutParams lp);
}
