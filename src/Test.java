import org.w3c.dom.*;
import org.xml.sax.SAXException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;
import java.util.ArrayList;

public class Test {
    public static void main(String[] args) throws ParserConfigurationException, IOException, SAXException {
//        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
//        DocumentBuilder builder = factory.newDocumentBuilder();
//        Document document = builder.parse("books.xml");
        ReaderDOM readerDOM = new ReaderDOM();

        ArrayList<Book> bks = readerDOM.read();
        System.out.println(bks.toString());


        DOMCreater domCreater = new DOMCreater();
        domCreater.create(bks);
        System.out.println(domCreater.getSumPrice());
    }


}
