// ToastModule.java
package com.studioproject;

import android.widget.Toast;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;
import java.util.HashMap;

public class ToastModule extends ReactContextBaseJavaModule {

    private static ReactApplicationContext reactContext;

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    public ToastModule(ReactApplicationContext context) {

        super(context);
        reactContext = context;

    }

    /*
     * ReactContextBaseJavaModule要求派生类实现getName方法。这个函数用于返回一个字符串名字，这个名字在 JavaScript
     * 端标记这个模块。这里我们把这个模块叫做ToastExample，这样就可以在 JavaScript
     * 中通过NativeModules.ToastExample访问到这个模块。译注：RN 已经内置了一个名为 ToastAndroid
     * 的模块，所以在练习时请勿使用 ToastAndroid 的名字，否则运行时会报错名字冲突！
     */
    @Override
    public String getName() {
        return "MyToastAndroid";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }

    @ReactMethod
    public void show(String message, int duration) {
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }

}
