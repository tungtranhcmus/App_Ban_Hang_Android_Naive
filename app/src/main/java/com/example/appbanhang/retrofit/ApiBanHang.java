package com.example.appbanhang.retrofit;

import com.example.appbanhang.model.LoaiSpModal;
import com.example.appbanhang.model.SanPhamMoiModal;

import io.reactivex.rxjava3.core.Observable;
import retrofit2.http.Field;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.GET;
import retrofit2.http.POST;

public interface ApiBanHang {
    @GET("getloaisp")
    Observable<LoaiSpModal> getLoaiSp();

    @GET("sanpham")
    Observable<SanPhamMoiModal> getSpMoi();

    @POST("detail")
    @FormUrlEncoded
    Observable<SanPhamMoiModal> getSanPham(
            @Field("page") int page,
            @Field("loai") int loai
    );
}
