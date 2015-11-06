package xjm.common;

import xjm.controller.IndexController;

import com.jfinal.config.Constants;
import com.jfinal.config.Handlers;
import com.jfinal.config.Interceptors;
import com.jfinal.config.JFinalConfig;
import com.jfinal.config.Plugins;
import com.jfinal.config.Routes;
import com.jfinal.kit.PropKit;
import com.jfinal.plugin.activerecord.ActiveRecordPlugin;
import com.jfinal.plugin.druid.DruidPlugin;
import com.jfinal.render.ViewType;

public class WebConfig extends JFinalConfig{

	@Override
	public void configConstant(Constants constants) {
		// TODO Auto-generated method stub
		constants.setEncoding("UTF-8");
	    constants.setDevMode(true);
	    constants.setViewType(ViewType.FREE_MARKER);
	    constants.setBaseViewPath("/WEB-INF/view");
	}

	@Override
	public void configHandler(Handlers arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void configInterceptor(Interceptors arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void configPlugin(Plugins plugins) {
		PropKit.use("jdbc.properties");
	    final String URL =PropKit.get("jdbcUrl");
	    final String USERNAME = PropKit.get("username");
	    final String PASSWORD =PropKit.get("password");
	    /*final Integer INITIALSIZE = PropKit.getInt("initialSize");
	    final Integer MIDIDLE = PropKit.getInt("minIdle");
	    final Integer MAXACTIVEE = PropKit.getInt("maxActivee");*/
	    DruidPlugin druidPlugin = new DruidPlugin(URL,USERNAME,PASSWORD);
	    //druidPlugin.set(INITIALSIZE,MIDIDLE,MAXACTIVEE);
	    druidPlugin.setFilters("stat,wall");
	    plugins.add(druidPlugin);
	    ActiveRecordPlugin activeRecordPlugin = new ActiveRecordPlugin(druidPlugin);
	    //activeRecordPlugin.addMapping("user", User.class);
	    plugins.add(activeRecordPlugin);		
	}

	@Override
	public void configRoute(Routes routes) {
		// TODO Auto-generated method stub
		routes.add("/", IndexController.class,"/phone");
	}

}
