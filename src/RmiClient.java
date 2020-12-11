import java.net.MalformedURLException;
import java.rmi.Naming;
import java.rmi.NotBoundException;
import java.rmi.RemoteException;
import java.time.LocalDate;

public class RmiClient {
    String localhost = "127.0.0.1";
    String RMI_HOSTNAME = "java.rmi.server.hostname";
    String SERVICE_PATH = "rmi://localhost/RmiService";

    Book book = new Book("bk3", "", "", "", 5.0, LocalDate.parse("2016-12-02"), "");

    public RmiClient() {
        try {
            System.setProperty(RMI_HOSTNAME, localhost);
            // URL удаленного объекта
            String objectName = SERVICE_PATH;

            RmiService rs = (RmiService) Naming.lookup(objectName);

            System.out.println("Запрос...");
            System.out.println("SumPrice:  " + rs.getSumPrice());

            System.out.println("addBook...");
            rs.addBook(book);

            System.out.println("SumPrice:  " + rs.getSumPrice());

        } catch (MalformedURLException | RemoteException e) {
            e.printStackTrace();
        } catch (NotBoundException e) {
            System.err.println("NotBoundException : " +
                    e.getMessage());
        }
    }

//    private void getSumPrice(RmiService rs) {
//        try {
//            System.out.println("SumPrice = " +
//                    rs.getSumPrice());
//        } catch (RemoteException e) {
//            e.printStackTrace();
//        }
//
//    }

    public static void main(String[] args) {
        new RmiClient();
        System.exit(0);
    }
}
