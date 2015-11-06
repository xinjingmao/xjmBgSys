package xjm.controller;

import com.jfinal.core.Controller;
/**
 * 测试
 * @author Administrator
 *
 */
public class IndexController extends Controller {
	public void index(){
		setAttr("phone", "1348762929");
		render("index.ftl");
	}

}
