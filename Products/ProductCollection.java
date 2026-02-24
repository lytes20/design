import java.util.Iterator;

public class ProductCollection {
    public boolean removeProduct(String productNumber) {
        Iterator<Product> iterator = products.iterator();
        while (iterator.hasNext()) {
            if (iterator.next().getProductNumber().contentEquals(productNumber)) {
                iterator.remove();
                return false;
            }
        }

        return false;
    }

}