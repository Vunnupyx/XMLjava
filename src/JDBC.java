import java.sql.*;
import java.time.LocalDate;

public class JDBC {
    public static final String connectionString = "jdbc:mysql://localhost:3306/mydbbooks";
    public static final String driverName = "com.mysql.cj.jdbc.Driver";
    private static final String login = "root";
    private static final String password = "root";
    private static Connection connection = null;

    public void run() {
        try {
            Class.forName(driverName);
        } catch (ClassNotFoundException e) {
            System.out.println("Can't get class. No driver found");
            e.printStackTrace();
            return;
        }
        try {
            connection = DriverManager.getConnection(connectionString, login, password);

            addBook();

            printAllBooks();

            removeBook();

            printAllBooks();

        } catch (SQLException e) {
            System.out.println("Can't get connection. Incorrect URL");
            e.printStackTrace();
            return;
        }
        try {
            connection.close();
        } catch (SQLException e) {
            System.out.println("Can't close connection");
            e.printStackTrace();
            return;
        }
    }

    public void printAllBooks() {
        try {
            Statement statement = connection.createStatement();
            statement.execute("SELECT * FROM books");
            ResultSet resultSet = statement.getResultSet();

            while (resultSet.next()) {
                System.out.printf("Book{\nid=%s \nauthor=%s \ntitle=%s \ngenre=%s \nprice=%s \npublish_date=%s \ndescription=%s\n}\n",
                        resultSet.getString("id"),
                        resultSet.getString("author"),
                        resultSet.getString("title"),
                        resultSet.getString("genre"),
                        resultSet.getDouble("price"),
                        LocalDate.parse(resultSet.getString("publish_date")),
                        resultSet.getString("description"));
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }


    public static void main(String[] args) {
        JDBC app = new JDBC();
        app.run();

        /*System.out.println("Вывести на экран информацию о книге по ID.");
        while (true) {
            System.out.println("Введите ID:");
            Scanner scanner = new Scanner(System.in);
            String ID = scanner.nextLine();
            printBooksByID(ID);
        }*/
    }

    public static void printBooksByID(String ID) {
        try {
            Statement statement = connection.createStatement();
            statement.execute("SELECT * FROM books WHERE id=" + ID);
            ResultSet resultSet = statement.getResultSet();
            while (resultSet.next()) {
                System.out.printf("Book{\nid=%s \nauthor=%s \ntitle=%s \ngenre=%s \nprice=%s \npublish_date=%s \ndescription=%s\n}\n",
                        resultSet.getString("id"),
                        resultSet.getString("author"),
                        resultSet.getString("title"),
                        resultSet.getString("genre"),
                        resultSet.getDouble("price"),
                        LocalDate.parse(resultSet.getString("publish_date")),
                        resultSet.getString("description"));
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

    public void addBook() {
        try {
            Statement statement = connection.createStatement();
            statement.execute("insert into books (author, title, genre, price, publish_date, description) values ('Дэвид Флэнаган', 'JavaScript для детей. Самоучитель по программированию', 'Компьютерная литература', 399, '2016-12-02', 'Эта книга позволит вам погрузиться в программирование и с легкостью освоить JavaScipt.');");

        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }
    public void removeBook(){
        try {
            Statement statement = connection.createStatement();
            statement.execute("delete FROM books WHERE id=3");

        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

}
