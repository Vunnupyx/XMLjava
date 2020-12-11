
import org.xml.sax.SAXException;

import javax.xml.parsers.ParserConfigurationException;
import java.io.IOException;
import java.rmi.RemoteException;
import java.rmi.registry.Registry;
import java.rmi.registry.LocateRegistry;
import java.rmi.server.UnicastRemoteObject;
import java.util.ArrayList;

public class RmiServiceImpl extends UnicastRemoteObject implements RmiService{

    private  ArrayList<Book> bks;

    public RmiServiceImpl() throws IOException, SAXException, ParserConfigurationException {
        super();
        ReaderDOM readerDOM = new ReaderDOM();
        bks = readerDOM.read();
    }

    @Override
    public double getSumPrice() throws RemoteException {
        System.out.println("getSum");
        double sumPrice = 0;
        for (Book bk : bks) {
            sumPrice += bk.getPrice();
        }
        return sumPrice;
    }

    @Override
    public void addBook(Book book) throws RemoteException {
        System.out.println("addBook");
        bks.add(book);
    }

    public static void main (String[] args) throws Exception
    {


        String localhost    = "127.0.0.1";
        String RMI_HOSTNAME = "java.rmi.server.hostname";
        try {
            System.setProperty(RMI_HOSTNAME, localhost);
            // Создание удаленного RMI объекта
            RmiService service = new RmiServiceImpl();

            // Определение имени удаленного RMI объекта
            String serviceName = "RmiService";

            System.out.println("Initializing " + serviceName);

            /*
             * Регистрация удаленного RMI объекта BillingService
             * в реестре rmiregistry
             */
            Registry registry = LocateRegistry.createRegistry(1099);
            registry.rebind(serviceName, service);
            System.out.println("Start " + serviceName);
        } catch (RemoteException e) {
            System.err.println("RemoteException : "+e.getMessage());
            System.exit(1);
        } catch (Exception e) {
            System.err.println("Exception : " + e.getMessage());
            System.exit(2);
        }
    }
}
