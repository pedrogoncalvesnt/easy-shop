namespace EasyShop.API.Entities;

public class Order
{
    public Order(
        int id,
        int customerId,
        decimal totalAmount,
        string status,
        string shippingAddress,
        string paymentMethod,
        string paymentStatus,
        string trackingNumber,
        double discount)
    {
        Id = id;
        OrderDate = DateTime.UtcNow;
        CustomerId = customerId;
        TotalAmount = totalAmount;
        Status = status;
        ShippingAddress = shippingAddress;
        PaymentMethod = paymentMethod;
        PaymentStatus = paymentStatus;
        TrackingNumber = trackingNumber;
        Discount = discount;
    }

    public int Id { get; private set; }
    public DateTime OrderDate { get; private set; }
    public int CustomerId { get; private set; }
    public Customer Customer { get; private set; } // Relacionamento com o cliente
    public decimal TotalAmount { get; private set; }
    public string Status { get; private set; }
    public List<Order> OrderItems { get; private set; } = new List<Order>(); // Inicialização
    public string ShippingAddress { get; private set; }
    public string PaymentMethod { get; private set; }
    public string PaymentStatus { get; private set; }
    public string TrackingNumber { get; private set; }
    public double Discount { get; private set; }
}
