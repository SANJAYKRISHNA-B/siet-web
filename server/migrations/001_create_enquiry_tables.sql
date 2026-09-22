CREATE TABLE IF NOT EXISTS admission_enquiries (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  student_name VARCHAR(150) NOT NULL,
  mobile_number VARCHAR(20) NOT NULL,
  email VARCHAR(255) NULL,
  course VARCHAR(100) NULL,
  department VARCHAR(180) NULL,
  city VARCHAR(100) NULL,
  source VARCHAR(100) NOT NULL DEFAULT 'Website',
  remarks TEXT NULL,
  status ENUM('new', 'contacted', 'qualified', 'closed') NOT NULL DEFAULT 'new',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  INDEX idx_admission_mobile_created (mobile_number, created_at),
  INDEX idx_admission_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS enquiries (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(150) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(30) NOT NULL,
  course VARCHAR(180) NOT NULL,
  message TEXT NULL,
  enquiry_type VARCHAR(50) NOT NULL DEFAULT 'general',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  INDEX idx_enquiry_type_created (enquiry_type, created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
