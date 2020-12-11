import org.w3c.dom.Attr;
import org.w3c.dom.Document;
import org.w3c.dom.Element;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import java.util.ArrayList;

public class DOMCreater {
    private double sumPrice;

    public void create(ArrayList<Book> bks) {
        try {
            DocumentBuilderFactory docFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder docBuilder = docFactory.newDocumentBuilder();

            Document doc = docBuilder.newDocument();
            Element rootElement = doc.createElement("books");
            doc.appendChild(rootElement);

            for (int i = 0; i < bks.size(); i++) {
                Element book = doc.createElement("book");
                rootElement.appendChild(book);

                Attr attr = doc.createAttribute("id");
                attr.setValue(bks.get(i).getId());
                book.setAttributeNode(attr);

                Element author = doc.createElement("author");
                author.appendChild(doc.createTextNode(bks.get(i).getAuthor()));
                book.appendChild(author);

                Element title = doc.createElement("title");
                title.appendChild(doc.createTextNode(bks.get(i).getTitle()));
                book.appendChild(title);

                Element genre = doc.createElement("genre");
                genre.appendChild(doc.createTextNode(bks.get(i).getGenre()));
                book.appendChild(genre);

                Element price = doc.createElement("price");
                price.appendChild(doc.createTextNode(bks.get(i).getPrice().toString()));
                book.appendChild(price);

                Element publish_date = doc.createElement("publish_date");
                publish_date.appendChild(doc.createTextNode(bks.get(i).getPublish_date().toString()));
                book.appendChild(publish_date);

                Element description = doc.createElement("description");
                description.appendChild(doc.createTextNode(bks.get(i).getDescription()));
                book.appendChild(description);

                this.sumPrice += bks.get(i).getPrice();
            }
            TransformerFactory transformerFactory = TransformerFactory.newInstance();
            Transformer transformer = transformerFactory.newTransformer();
            DOMSource source = new DOMSource(doc);
            StreamResult result = new StreamResult("createBooks.xml");
            transformer.transform(source, result);


        } catch (ParserConfigurationException | TransformerException e) {
            e.printStackTrace();
        }
    }

    public Double getSumPrice() {
        return sumPrice;
    }
}
