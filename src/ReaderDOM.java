import org.w3c.dom.*;
import org.xml.sax.SAXException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;
import java.time.LocalDate;
import java.util.ArrayList;

public class ReaderDOM {
    public  ArrayList<Book> read() throws ParserConfigurationException, IOException, SAXException {
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        DocumentBuilder builder = factory.newDocumentBuilder();
        Document document = builder.parse("books.xml");

        ArrayList<Book> bks = new ArrayList<>();

        //Get all employees
        NodeList nList = document.getElementsByTagName("book");
        for (int temp = 0; temp < nList.getLength(); temp++) {
            Node node = nList.item(temp);
            if (node.getNodeType() == Node.ELEMENT_NODE) {
                //Print each employee's detail
                Element eElement = (Element) node;

                bks.add(new Book(eElement.getAttribute("id"),
                        eElement.getElementsByTagName("author").item(0).getTextContent(),
                        eElement.getElementsByTagName("title").item(0).getTextContent(),
                        eElement.getElementsByTagName("genre").item(0).getTextContent(),
                        Double.parseDouble(eElement.getElementsByTagName("price").item(0).getTextContent()),
                        LocalDate.parse(eElement.getElementsByTagName("publish_date").item(0).getTextContent()),
                        eElement.getElementsByTagName("description").item(0).getTextContent()));
            }
        }
        return bks;
    }
}
