package xjm.util;

public class ViewResult {
	/**
	 * 状态编号
	 */
	public int code;
	public String message;
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public ViewResult(int code, String message) {
		super();
		this.code = code;
		this.message = message;
	}
	public ViewResult () {}
}
