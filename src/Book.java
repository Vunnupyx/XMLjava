import java.io.Serializable;
import java.time.LocalDate;

public class Book implements Serializable {
    private String id;
    private String author;
    private String title;
    private String genre;
    private Double price;
    private LocalDate publish_date;
    private String description;

    public Book(){}
    public Book(String id, String author, String title, String genre, Double price, LocalDate publish_date, String description) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.genre = genre;
        this.price = price;
        this.publish_date = publish_date;
        this.description = description;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public LocalDate getPublish_date() {
        return publish_date;
    }

    public void setPublish_date(LocalDate publish_date) {
        this.publish_date = publish_date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id='" + this.id + '\'' +
                ", author='" + this.author + '\'' +
                ", title='" + this.title + '\'' +
                ", genre='" + this.genre + '\'' +
                ", price='" + this.price + '\'' +
                ", publish_date='" + this.publish_date + '\'' +
                ", description='" + this.description + '\'' +
                '}';
    }
}
