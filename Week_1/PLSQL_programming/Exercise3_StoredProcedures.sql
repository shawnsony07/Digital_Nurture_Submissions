-- Exercise 3: Stored Procedures

-- Scenario 1: ProcessMonthlyInterest
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'Savings';
    
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Monthly interest processed for all savings accounts.');
END ProcessMonthlyInterest;
/

-- Scenario 2: UpdateEmployeeBonus
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_department IN VARCHAR2,
    p_bonus_percentage IN NUMBER
) IS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * (p_bonus_percentage / 100))
    WHERE Department = p_department;
    
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Bonus applied to employees in department: ' || p_department);
END UpdateEmployeeBonus;
/

-- Scenario 3: TransferFunds
CREATE OR REPLACE PROCEDURE TransferFunds (
    p_from_account_id IN NUMBER,
    p_to_account_id IN NUMBER,
    p_amount IN NUMBER
) IS
    v_balance NUMBER;
BEGIN
    -- Check balance of source account
    SELECT Balance INTO v_balance
    FROM Accounts
    WHERE AccountID = p_from_account_id;
    
    IF v_balance >= p_amount THEN
        -- Deduct from source
        UPDATE Accounts
        SET Balance = Balance - p_amount
        WHERE AccountID = p_from_account_id;
        
        -- Add to destination
        UPDATE Accounts
        SET Balance = Balance + p_amount
        WHERE AccountID = p_to_account_id;
        
        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Successfully transferred ' || p_amount || ' from account ' || p_from_account_id || ' to ' || p_to_account_id);
    ELSE
        DBMS_OUTPUT.PUT_LINE('Insufficient balance in source account ' || p_from_account_id);
    END IF;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('One of the account IDs does not exist.');
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('An error occurred during fund transfer.');
END TransferFunds;
/
