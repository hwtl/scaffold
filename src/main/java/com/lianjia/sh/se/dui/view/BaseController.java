package com.lianjia.sh.se.dui.view;

import org.springframework.boot.autoconfigure.condition.ConditionalOnWebApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * Created with IntelliJ IDEA.
 *
 * @Author Charles.Xu
 * @summary
 * @Copyright (c) 2016, Lianjia Group All Rights Reserved.
 * @since 2016-07-18 下午5:49
 */
@Controller
@ConditionalOnWebApplication
public class BaseController {
    @RequestMapping({"", "/switchboard/list", "/switchboard/list", "/demo/**"})
    public String index (Model model) {
        return "index";
    }

    @RequestMapping({"ppt"})
    public String ppt () {
        return "ppt";
    }
}
