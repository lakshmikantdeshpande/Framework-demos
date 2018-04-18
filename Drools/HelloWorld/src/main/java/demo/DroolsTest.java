package demo;

import com.google.common.io.Resources;
import demo.model.Product;
import org.drools.compiler.compiler.DroolsParserException;
import org.drools.compiler.compiler.PackageBuilder;
import org.drools.core.RuleBase;
import org.drools.core.RuleBaseFactory;
import org.drools.core.WorkingMemory;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;

public class DroolsTest {

    public static void main(String[] args) throws DroolsParserException, IOException {
        DroolsTest droolsTest = new DroolsTest();
        droolsTest.executeDrools();
    }

    public void executeDrools() throws DroolsParserException, IOException {
        PackageBuilder packageBuilder = new PackageBuilder();

        String ruleFile = "Rules.drl";
        InputStream resourceAsStream = Resources.getResource(ruleFile).openStream();

        Reader reader = new InputStreamReader(resourceAsStream);
        packageBuilder.addPackageFromDrl(reader);
        org.drools.core.rule.Package rulesPackage = packageBuilder.getPackage();
        RuleBase ruleBase = RuleBaseFactory.newRuleBase();
        ruleBase.addPackage(rulesPackage);

        WorkingMemory workingMemory = ruleBase.newStatefulSession();

        Product product = new Product();
        product.setType("diamond");

        workingMemory.insert(product);
        workingMemory.fireAllRules();

        System.out.println(String.format("Drools says: You got %s%% discount for buying %s", product.getDiscount(), product.getType()));
    }

}
