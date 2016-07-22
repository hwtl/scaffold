package com.lianjia.sh.se.dui.config;

import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnWebApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.CacheControl;
import org.springframework.web.servlet.DispatcherServlet;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.resource.GzipResourceResolver;


import javax.servlet.Servlet;

/**
 * Created by charles on 16/3/22.
 */
@Configuration
@ConditionalOnWebApplication
@ConditionalOnClass({Servlet.class, DispatcherServlet.class, WebMvcConfigurerAdapter.class})
@EnableCaching
public class DefauttWebMvcConfigurer extends WebMvcConfigurerAdapter {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
//        CacheControl cacheControl = CacheControl.maxAge(15, TimeUnit.HOURS);
        CacheControl cacheControl = CacheControl.noCache();
        registry.addResourceHandler("/static/**").addResourceLocations("classpath:/static/").setCacheControl(cacheControl);
        registry.addResourceHandler("/vendor/**").addResourceLocations("classpath:/").setCacheControl(cacheControl);
    }

}