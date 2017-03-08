package sachin.lakshmikant;

import org.springframework.beans.factory.annotation.Required;

public class Point {
	private int x;
	private int y;

	public int getX() {
		return x;
	}

	@Required
	public void setX(int x) {
		this.x = x;
	}

	@Required
	public int getY() {
		return y;
	}

	public void setY(int y) {
		this.y = y;
	}

}
