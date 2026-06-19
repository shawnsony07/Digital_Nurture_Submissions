-- Exercise 1: Control Structures

SET SERVEROUTPUT ON;

-- Scenario 1: Apply 1% discount to loan interest rates for customers above 60 years old.
DECLARE
    CURSOR c_customers IS
        SELECT c.CustomerID, c.DOB, l.LoanID, l.InterestRate
        FROM Customers c
        JOIN Loans l ON c.CustomerID = l.CustomerID;
    v_age NUMBER;
BEGIN
    FOR r IN c_customers LOOP
        -- Calculate age
        v_age := FLOOR(MONTHS_BETWEEN(SYSDATE, r.DOB) / 12);
        
        IF v_age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE LoanID = r.LoanID;
            DBMS_OUTPUT.PUT_LINE('Discount applied for Customer ID: ' || r.CustomerID || ' on Loan ID: ' || r.LoanID);
        END IF;
    END LOOP;
    COMMIT;
END;
/

-- Scenario 2: Promote to VIP status based on balance over $10,000
-- Assuming IsVIP column is added to Customers table
-- ALTER TABLE Customers ADD IsVIP VARCHAR2(5) DEFAULT 'FALSE';
DECLARE
    CURSOR c_balances IS
        SELECT CustomerID, Balance FROM Customers;
BEGIN
    FOR r IN c_balances LOOP
        IF r.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = r.CustomerID;
            DBMS_OUTPUT.PUT_LINE('Customer ' || r.CustomerID || ' promoted to VIP.');
        END IF;
    END LOOP;
    COMMIT;
END;
/

-- Scenario 3: Send reminders for loans due within the next 30 days
DECLARE
    CURSOR c_due_loans IS
        SELECT l.LoanID, c.CustomerID, c.Name, l.EndDate
        FROM Loans l
        JOIN Customers c ON l.CustomerID = c.CustomerID
        WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE + 30;
BEGIN
    FOR r IN c_due_loans LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Customer ' || r.Name || ' (ID: ' || r.CustomerID || '), your loan (ID: ' || r.LoanID || ') is due on ' || TO_CHAR(r.EndDate, 'YYYY-MM-DD') || '.');
    END LOOP;
END;
/
