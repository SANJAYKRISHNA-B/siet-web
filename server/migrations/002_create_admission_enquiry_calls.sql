CREATE TABLE IF NOT EXISTS admission_enquiry_calls (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  admission_enquiry_id BIGINT UNSIGNED NOT NULL,
  provider VARCHAR(30) NOT NULL DEFAULT 'exotel',
  provider_call_sid VARCHAR(100) NULL,
  student_number VARCHAR(20) NOT NULL,
  counsellor_number VARCHAR(20) NOT NULL,
  call_status VARCHAR(50) NOT NULL DEFAULT 'requested',
  error_message VARCHAR(500) NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  INDEX idx_admission_call_enquiry (admission_enquiry_id),
  INDEX idx_admission_call_sid (provider_call_sid),
  INDEX idx_admission_call_status (call_status),
  CONSTRAINT fk_admission_call_enquiry
    FOREIGN KEY (admission_enquiry_id) REFERENCES admission_enquiries(id)
    ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
