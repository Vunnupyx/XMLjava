import java.rmi.Remote;
import java.rmi.RemoteException;

public interface RmiService extends Remote {
    public double getSumPrice() throws RemoteException;
    public void addBook(Book book) throws RemoteException;
}
