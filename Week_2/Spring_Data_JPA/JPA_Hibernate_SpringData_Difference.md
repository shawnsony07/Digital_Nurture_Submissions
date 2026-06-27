# Difference between JPA, Hibernate, and Spring Data JPA

This document outlines the core differences between JPA, Hibernate, and Spring Data JPA, as required by the course curriculum.

---

## 1. Java Persistence API (JPA)
*   **What it is:** A **specification** (standard) for Object-Relational Mapping (ORM) in Java (defined under JSR 338).
*   **Implementation:** It does **not** contain any code or concrete implementation. It is simply a collection of interfaces, annotations (like `@Entity`, `@Table`, `@Id`), and guidelines.
*   **Analogy:** Think of JPA as an **interface** in Java. It defines the contract but doesn't implement the methods.

---

## 2. Hibernate
*   **What it is:** A concrete **ORM Framework** that implements the JPA specification.
*   **Functionality:** It contains the actual code to map Java objects to database tables, manage transactions, write SQL queries, and cache data.
*   **Analogy:** Think of Hibernate as the **class** that `implements` the JPA interface.

---

## 3. Spring Data JPA
*   **What it is:** An **abstraction layer** built on top of a JPA provider (like Hibernate) to reduce database boilerplate code.
*   **Functionality:** Instead of manually opening sessions, starting transactions, writing SQL queries, and closing sessions, Spring Data JPA provides interfaces like `JpaRepository` which automatically generate CRUD operations at runtime.
*   **Analogy:** Think of Spring Data JPA as a **helper library** that sits on top of Hibernate to make database operations even simpler.

---

## 4. Code Comparison: Saving an Employee

### Using Hibernate (Manual Session & Transaction Management)
In pure Hibernate, you must manually manage the database connection life cycle:

```java
public Integer addEmployee(Employee employee) {
    Session session = factory.openSession();
    Transaction tx = null;
    Integer employeeID = null;
    
    try {
        tx = session.beginTransaction();
        employeeID = (Integer) session.save(employee); 
        tx.commit();
    } catch (HibernateException e) {
        if (tx != null) tx.rollback();
        e.printStackTrace(); 
    } finally {
        session.close(); 
    }
    return employeeID;
}
```

### Using Spring Data JPA (Declarative Abstraction)
With Spring Data JPA, boilerplate is reduced to an interface declaration and dependency injection:

**EmployeeRepository.java:**
```java
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}
```

**EmployeeService.java:**
```java
@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Transactional
    public void addEmployee(Employee employee) {
        employeeRepository.save(employee); // Generates query, handles session & commits transaction automatically
    }
}
```
