package com.tencent.mtt.hippy.nv.utils;

import android.graphics.Color;
import android.text.TextUtils;
import android.util.Pair;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ColorParseUtils {
    private final static Map<String, Integer> colorMap = new HashMap<>();
    private final static int HEX_LONG_SIZE = 7;
    private final static int HEX_SHORT_SIZE = 4;
    private final static int HEX = 16;
    private final static int RGB_SIZE = 3;
    private final static int RGBA_SIZE = 4;
    private final static int COLOR_RANGE = 255;
    public final static String RGB = "rgb";
    public final static String RGBA = "rgba";

    private final static SingleFunctionParser.FlatMapper<Integer> FUNCTIONAL_RGB_MAPPER =
            new SingleFunctionParser.FlatMapper<Integer>() {
                @Override
                public Integer map(String raw) {
                    int color = parseUnitOrPercent(raw, COLOR_RANGE);
                    if (color < 0) {
                        color = 0;
                    } else if (color > COLOR_RANGE) {
                        color = COLOR_RANGE;
                    }
                    return color;
                }
            };

    private final static SingleFunctionParser.NonUniformMapper<Number> FUNCTIONAL_RGBA_MAPPER =
            new SingleFunctionParser.NonUniformMapper<Number>() {
                @Override
                public List<Number> map(List<String> raw) {
                    List<Number> result = new ArrayList<>(RGBA_SIZE);
                    int i, color;
                    for (i = 0; i < RGB_SIZE; i++) {
                        color = parseUnitOrPercent(raw.get(i), COLOR_RANGE);
                        if (color < 0) {
                            color = 0;
                        } else if (color > COLOR_RANGE) {
                            color = COLOR_RANGE;
                        }
                        result.add(color);
                    }
                    result.add(Float.valueOf(raw.get(i)));
                    return result;
                }
            };


    static {
        colorMap.put("aliceblue", 0XFFF0F8FF);
        colorMap.put("antiquewhite", 0XFFFAEBD7);
        colorMap.put("aqua", 0XFF00FFFF);
        colorMap.put("aquamarine", 0XFF7FFFD4);
        colorMap.put("azure", 0XFFF0FFFF);
        colorMap.put("beige", 0XFFF5F5DC);
        colorMap.put("bisque", 0XFFFFE4C4);
        colorMap.put("black", 0XFF000000);
        colorMap.put("blanchedalmond", 0XFFFFEBCD);
        colorMap.put("blue", 0XFF0000FF);
        colorMap.put("blueviolet", 0XFF8A2BE2);
        colorMap.put("brown", 0XFFA52A2A);
        colorMap.put("burlywood", 0XFFDEB887);
        colorMap.put("cadetblue", 0XFF5F9EA0);
        colorMap.put("chartreuse", 0XFF7FFF00);
        colorMap.put("chocolate", 0XFFD2691E);
        colorMap.put("coral", 0XFFFF7F50);
        colorMap.put("cornflowerblue", 0XFF6495ED);
        colorMap.put("cornsilk", 0XFFFFF8DC);
        colorMap.put("crimson", 0XFFDC143C);
        colorMap.put("cyan", 0XFF00FFFF);
        colorMap.put("darkblue", 0XFF00008B);
        colorMap.put("darkcyan", 0XFF008B8B);
        colorMap.put("darkgoldenrod", 0XFFB8860B);
        colorMap.put("darkgray", 0XFFA9A9A9);
        colorMap.put("darkgreen", 0XFF006400);
        colorMap.put("darkkhaki", 0XFFBDB76B);
        colorMap.put("darkmagenta", 0XFF8B008B);
        colorMap.put("darkolivegreen", 0XFF556B2F);
        colorMap.put("darkorange", 0XFFFF8C00);
        colorMap.put("darkorchid", 0XFF9932CC);
        colorMap.put("darkred", 0XFF8B0000);
        colorMap.put("darksalmon", 0XFFE9967A);
        colorMap.put("darkseagreen", 0XFF8FBC8F);
        colorMap.put("darkslateblue", 0XFF483D8B);
        colorMap.put("darkslategray", 0XFF2F4F4F);
        colorMap.put("darkslategrey", 0XFF2F4F4F);
        colorMap.put("darkturquoise", 0XFF00CED1);
        colorMap.put("darkviolet", 0XFF9400D3);
        colorMap.put("deeppink", 0XFFFF1493);
        colorMap.put("deepskyblue", 0XFF00BFFF);
        colorMap.put("dimgray", 0XFF696969);
        colorMap.put("dimgrey", 0XFF696969);
        colorMap.put("dodgerblue", 0XFF1E90FF);
        colorMap.put("firebrick", 0XFFB22222);
        colorMap.put("floralwhite", 0XFFFFFAF0);
        colorMap.put("forestgreen", 0XFF228B22);
        colorMap.put("fuchsia", 0XFFFF00FF);
        colorMap.put("gainsboro", 0XFFDCDCDC);
        colorMap.put("ghostwhite", 0XFFF8F8FF);
        colorMap.put("gold", 0XFFFFD700);
        colorMap.put("goldenrod", 0XFFDAA520);
        colorMap.put("gray", 0XFF808080);
        colorMap.put("grey", 0XFF808080);
        colorMap.put("green", 0XFF008000);
        colorMap.put("greenyellow", 0XFFADFF2F);
        colorMap.put("honeydew", 0XFFF0FFF0);
        colorMap.put("hotpink", 0XFFFF69B4);
        colorMap.put("indianred", 0XFFCD5C5C);
        colorMap.put("indigo", 0XFF4B0082);
        colorMap.put("ivory", 0XFFFFFFF0);
        colorMap.put("khaki", 0XFFF0E68C);
        colorMap.put("lavender", 0XFFE6E6FA);
        colorMap.put("lavenderblush", 0XFFFFF0F5);
        colorMap.put("lawngreen", 0XFF7CFC00);
        colorMap.put("lemonchiffon", 0XFFFFFACD);
        colorMap.put("lightblue", 0XFFADD8E6);
        colorMap.put("lightcoral", 0XFFF08080);
        colorMap.put("lightcyan", 0XFFE0FFFF);
        colorMap.put("lightgoldenrodyellow", 0XFFFAFAD2);
        colorMap.put("lightgray", 0XFFD3D3D3);
        colorMap.put("lightgrey", 0XFFD3D3D3);
        colorMap.put("lightgreen", 0XFF90EE90);
        colorMap.put("lightpink", 0XFFFFB6C1);
        colorMap.put("lightsalmon", 0XFFFFA07A);
        colorMap.put("lightseagreen", 0XFF20B2AA);
        colorMap.put("lightskyblue", 0XFF87CEFA);
        colorMap.put("lightslategray", 0XFF778899);
        colorMap.put("lightslategrey", 0XFF778899);
        colorMap.put("lightsteelblue", 0XFFB0C4DE);
        colorMap.put("lightyellow", 0XFFFFFFE0);
        colorMap.put("lime", 0XFF00FF00);
        colorMap.put("limegreen", 0XFF32CD32);
        colorMap.put("linen", 0XFFFAF0E6);
        colorMap.put("magenta", 0XFFFF00FF);
        colorMap.put("maroon", 0XFF800000);
        colorMap.put("mediumaquamarine", 0XFF66CDAA);
        colorMap.put("mediumblue", 0XFF0000CD);
        colorMap.put("mediumorchid", 0XFFBA55D3);
        colorMap.put("mediumpurple", 0XFF9370DB);
        colorMap.put("mediumseagreen", 0XFF3CB371);
        colorMap.put("mediumslateblue", 0XFF7B68EE);
        colorMap.put("mediumspringgreen", 0XFF00FA9A);
        colorMap.put("mediumturquoise", 0XFF48D1CC);
        colorMap.put("mediumvioletred", 0XFFC71585);
        colorMap.put("midnightblue", 0XFF191970);
        colorMap.put("mintcream", 0XFFF5FFFA);
        colorMap.put("mistyrose", 0XFFFFE4E1);
        colorMap.put("moccasin", 0XFFFFE4B5);
        colorMap.put("navajowhite", 0XFFFFDEAD);
        colorMap.put("navy", 0XFF000080);
        colorMap.put("oldlace", 0XFFFDF5E6);
        colorMap.put("olive", 0XFF808000);
        colorMap.put("olivedrab", 0XFF6B8E23);
        colorMap.put("orange", 0XFFFFA500);
        colorMap.put("orangered", 0XFFFF4500);
        colorMap.put("orchid", 0XFFDA70D6);
        colorMap.put("palegoldenrod", 0XFFEEE8AA);
        colorMap.put("palegreen", 0XFF98FB98);
        colorMap.put("paleturquoise", 0XFFAFEEEE);
        colorMap.put("palevioletred", 0XFFDB7093);
        colorMap.put("papayawhip", 0XFFFFEFD5);
        colorMap.put("peachpuff", 0XFFFFDAB9);
        colorMap.put("peru", 0XFFCD853F);
        colorMap.put("pink", 0XFFFFC0CB);
        colorMap.put("plum", 0XFFDDA0DD);
        colorMap.put("powderblue", 0XFFB0E0E6);
        colorMap.put("purple", 0XFF800080);
        colorMap.put("rebeccapurple", 0XFF663399);
        colorMap.put("red", 0XFFFF0000);
        colorMap.put("rosybrown", 0XFFBC8F8F);
        colorMap.put("royalblue", 0XFF4169E1);
        colorMap.put("saddlebrown", 0XFF8B4513);
        colorMap.put("salmon", 0XFFFA8072);
        colorMap.put("sandybrown", 0XFFF4A460);
        colorMap.put("seagreen", 0XFF2E8B57);
        colorMap.put("seashell", 0XFFFFF5EE);
        colorMap.put("sienna", 0XFFA0522D);
        colorMap.put("silver", 0XFFC0C0C0);
        colorMap.put("skyblue", 0XFF87CEEB);
        colorMap.put("slateblue", 0XFF6A5ACD);
        colorMap.put("slategray", 0XFF708090);
        colorMap.put("slategrey", 0XFF708090);
        colorMap.put("snow", 0XFFFFFAFA);
        colorMap.put("springgreen", 0XFF00FF7F);
        colorMap.put("steelblue", 0XFF4682B4);
        colorMap.put("tan", 0XFFD2B48C);
        colorMap.put("teal", 0XFF008080);
        colorMap.put("thistle", 0XFFD8BFD8);
        colorMap.put("tomato", 0XFFFF6347);
        colorMap.put("turquoise", 0XFF40E0D0);
        colorMap.put("violet", 0XFFEE82EE);
        colorMap.put("wheat", 0XFFF5DEB3);
        colorMap.put("white", 0XFFFFFFFF);
        colorMap.put("whitesmoke", 0XFFF5F5F5);
        colorMap.put("yellow", 0XFFFFFF00);
        colorMap.put("yellowgreen", 0XFF9ACD32);
        colorMap.put("transparent", 0x00000000);
    }

    /***
     * 是否nameColor
     * http://www.w3school.com.cn/cssref/css_colornames.asp
     */
    public static boolean isNamedColor(String name) {
        return colorMap.containsKey(name);
    }

    private static int parseAlpha(float alpha) {
        return (int) (alpha * COLOR_RANGE);
    }

    private
    static Pair<Boolean, Integer> transHexColor(String color) {
        if (color.length() == HEX_SHORT_SIZE) {
            int r, g, b;
            r = Integer.parseInt(color.substring(1, 2), HEX);
            g = Integer.parseInt(color.substring(2, 3), HEX);
            b = Integer.parseInt(color.substring(3, 4), HEX);
            return new Pair<>(Boolean.TRUE, Color.rgb(r + (r << 4), g + (g << 4), b + (b << 4)));
        } else if (color.length() == HEX_LONG_SIZE || color.length() == 9) {
            return new Pair<>(Boolean.TRUE, Color.parseColor(color));
        } else {
            return new Pair<>(Boolean.FALSE, Color.TRANSPARENT);
        }
    }

    private
    static Pair<Boolean, Integer> transRGBColor(String color) {
        SingleFunctionParser<Integer> functionParser = new SingleFunctionParser<>(color, FUNCTIONAL_RGB_MAPPER);
        List<Integer> rgb = functionParser.parse(RGB);
        if (rgb != null && rgb.size() == RGB_SIZE) {
            return new Pair<>(Boolean.TRUE, Color.rgb(rgb.get(0), rgb.get(1), rgb.get(2)));
        } else {
            return new Pair<>(Boolean.FALSE, Color.TRANSPARENT);
        }
    }

    private
    static Pair<Boolean, Integer> transRGBAColor(String color) {
        SingleFunctionParser<Number> functionParser = new SingleFunctionParser<>(color, FUNCTIONAL_RGBA_MAPPER);
        List<Number> rgba = functionParser.parse(RGBA);
        if (rgba != null && rgba.size() == RGBA_SIZE) {
            return new Pair<>(Boolean.TRUE, Color.argb(
                    parseAlpha(rgba.get(3).floatValue()),
                    rgba.get(0).intValue(),
                    rgba.get(1).intValue(),
                    rgba.get(2).intValue()));
        } else {
            return new Pair<>(Boolean.FALSE, Color.TRANSPARENT);
        }
    }

    public static int parseColor(String color) {
        return parseColor(color, Integer.MIN_VALUE);
    }

    public static int parseColor(String color, int defaultColor) {
        if (TextUtils.isEmpty(color)) {
            return defaultColor;
        }
        color = color.trim();
        int result = defaultColor;
        if (isNamedColor(color)) {
            return colorMap.get(color);
        }
        Pair<Boolean, Integer> parse = transHexColor(color);
        if (parse.first) {
            return parse.second;
        }
        try {
            //rgba(123,123,255,0.3) rgba(123,123,255,50%) rgba(0.5,123,255,50%)
            if (color.indexOf(RGBA) == 0) {
                parse = transRGBAColor(color);
                if (parse.first) {
                    return parse.second;
                }
            }
            //rgb(123,123,255) rgb(0.5,123,50%)
            //r:  0-255 / 0.0 - 1.0 / 0% - 100%
            if (color.indexOf(RGB) == 0) {
                parse = transRGBColor(color);
                if (parse.first) {
                    return parse.second;
                }
            }


        } catch (RuntimeException e) {
//            ViolaLogUtils.e("ColorUtils", "parseColor " + e.getMessage());
        }
        return defaultColor;
    }

  public static int parseUnitOrPercent(String raw, int unit) {
    int suffix;
    if ((suffix = raw.lastIndexOf('%')) != -1) {
      return parsePercent(raw.substring(0, suffix), unit);
    } else {
      return Integer.parseInt(raw);
    }
  }

  private static int parsePercent(String raw, int unit) {
    return (int) (Float.parseFloat(raw) / 100 * unit);
  }

}
