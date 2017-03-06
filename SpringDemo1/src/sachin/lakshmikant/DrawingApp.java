package sachin.lakshmikant;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class DrawingApp {

	public static void main(String[] args) {
		// Triangle triangle = new Triangle();

		// BeanFactory beanFactory = new XmlBeanFactory(new FileSystemResource(
		// "spring.xml"));

		ApplicationContext ctx = new ClassPathXmlApplicationContext(
				"spring.xml");
		Triangle triangle = (Triangle) ctx.getBean("triangle");
		triangle.draw();
		((AbstractApplicationContext) ctx).close();
	}

}
