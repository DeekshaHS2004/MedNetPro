
// In-memory storage for medicines
let medicines = [];
let nextId = 1;

// Sample medicine data
const sampleMedicines = [
  { name: "Amoxicillin", type: "Syrup", price: 130.13, stock: 488, expiry: "2026-10-08", manufacturer: "Cipla", purpose: "Fever reduction" },
  { name: "Clotrimazole", type: "Injection", price: 110.06, stock: 209, expiry: "2026-06-08", manufacturer: "Dr. Reddy's", purpose: "Acid reduction" },
  { name: "Azithromycin", type: "Tablet", price: 73.42, stock: 394, expiry: "2026-09-18", manufacturer: "Novartis", purpose: "Thyroid regulation" },
  { name: "Glimepiride", type: "Injection", price: 23.82, stock: 441, expiry: "2027-08-02", manufacturer: "Novartis", purpose: "Anti-inflammatory" },
  { name: "Methylprednisolone", type: "Injection", price: 168.7, stock: 58, expiry: "2027-06-05", manufacturer: "Torrent", purpose: "Fever reduction" },
  { name: "Hydrocortisone", type: "Syrup", price: 188.36, stock: 61, expiry: "2028-02-03", manufacturer: "Glenmark", purpose: "Cholesterol management" },
  { name: "Hydrocortisone", type: "Syrup", price: 29.91, stock: 418, expiry: "2027-07-05", manufacturer: "Zydus", purpose: "Asthma control" },
  { name: "Glimepiride", type: "Syrup", price: 97.34, stock: 427, expiry: "2027-12-20", manufacturer: "Glenmark", purpose: "Acid reduction" },
  { name: "Levothyroxine", type: "Syrup", price: 83.55, stock: 56, expiry: "2028-01-14", manufacturer: "Novartis", purpose: "Asthma control" },
  { name: "Omeprazole", type: "Suspension", price: 76.99, stock: 490, expiry: "2027-05-26", manufacturer: "Lupin", purpose: "Acid reduction" },
  { name: "Zinc Sulphate", type: "Suspension", price: 72.17, stock: 104, expiry: "2027-10-26", manufacturer: "Sun Pharma", purpose: "Fever reduction" },
  { name: "Pioglitazone", type: "Injection", price: 110.42, stock: 296, expiry: "2026-10-05", manufacturer: "Zydus", purpose: "Asthma control" },
  { name: "Zinc Sulphate", type: "Syrup", price: 29.72, stock: 68, expiry: "2026-09-20", manufacturer: "Cipla", purpose: "Acid reduction" },
  { name: "Ivermectin", type: "Injection", price: 106.65, stock: 116, expiry: "2027-05-20", manufacturer: "Lupin", purpose: "Diabetes control" },
  { name: "Doxycycline", type: "Capsule", price: 81.04, stock: 368, expiry: "2027-02-15", manufacturer: "Novartis", purpose: "Diabetes control" },
  { name: "Fexofenadine", type: "Syrup", price: 168.38, stock: 133, expiry: "2026-05-17", manufacturer: "Sun Pharma", purpose: "Acid reduction" },
  { name: "Hydrocortisone", type: "Suspension", price: 119.75, stock: 369, expiry: "2027-10-15", manufacturer: "Glenmark", purpose: "Vitamin supplement" },
  { name: "Amoxicillin", type: "Tablet", price: 148.47, stock: 310, expiry: "2026-05-29", manufacturer: "Zydus", purpose: "Blood pressure control" },
  { name: "Mebendazole", type: "Injection", price: 97.06, stock: 209, expiry: "2027-11-28", manufacturer: "Glenmark", purpose: "Acid reduction" },
  { name: "Mebendazole", type: "Tablet", price: 101.34, stock: 257, expiry: "2026-10-11", manufacturer: "Sun Pharma", purpose: "Diabetes control" },
  { name: "Glimepiride", type: "Tablet", price: 198.05, stock: 292, expiry: "2028-02-09", manufacturer: "Sun Pharma", purpose: "Acid reduction" },
  { name: "Iron Folic Acid", type: "Syrup", price: 112.87, stock: 355, expiry: "2027-08-16", manufacturer: "Novartis", purpose: "Cholesterol management" },
  { name: "Diclofenac", type: "Injection", price: 178.4, stock: 406, expiry: "2027-10-31", manufacturer: "Glenmark", purpose: "Allergy relief" },
  { name: "Prednisolone", type: "Injection", price: 158.4, stock: 156, expiry: "2027-08-18", manufacturer: "Glenmark", purpose: "Anti-inflammatory" },
  { name: "Zinc Sulphate", type: "Injection", price: 199.1, stock: 303, expiry: "2026-09-07", manufacturer: "Torrent", purpose: "Antibiotic" },
  { name: "Betamethasone", type: "Tablet", price: 190.51, stock: 170, expiry: "2027-12-09", manufacturer: "Novartis", purpose: "Diabetes control" },
  { name: "Calcium Carbonate", type: "Tablet", price: 153.45, stock: 263, expiry: "2026-08-13", manufacturer: "Dr. Reddy's", purpose: "Thyroid regulation" },
  { name: "Methylprednisolone", type: "Tablet", price: 60.01, stock: 68, expiry: "2027-12-29", manufacturer: "Sun Pharma", purpose: "Acid reduction" },
  { name: "Azithromycin", type: "Tablet", price: 158.37, stock: 479, expiry: "2026-06-07", manufacturer: "Sun Pharma", purpose: "Antibiotic" },
  { name: "Omeprazole", type: "Syrup", price: 111.05, stock: 413, expiry: "2027-05-17", manufacturer: "Torrent", purpose: "Diabetes control" },
  { name: "Naproxen", type: "Injection", price: 82.8, stock: 390, expiry: "2026-10-17", manufacturer: "Novartis", purpose: "Vitamin supplement" },
  { name: "Cetirizine", type: "Syrup", price: 103.87, stock: 372, expiry: "2028-01-03", manufacturer: "Lupin", purpose: "Vitamin supplement" },
  { name: "Pioglitazone", type: "Suspension", price: 154.29, stock: 159, expiry: "2027-10-13", manufacturer: "Dr. Reddy's", purpose: "Pain relief" },
  { name: "Ibuprofen", type: "Capsule", price: 20.25, stock: 381, expiry: "2026-10-13", manufacturer: "Torrent", purpose: "Allergy relief" },
  { name: "Montelukast", type: "Injection", price: 187.08, stock: 361, expiry: "2027-10-25", manufacturer: "Novartis", purpose: "Asthma control" },
  { name: "Linagliptin", type: "Tablet", price: 33.23, stock: 459, expiry: "2027-06-17", manufacturer: "Cipla", purpose: "Vitamin supplement" },
  { name: "Clotrimazole", type: "Suspension", price: 110.13, stock: 152, expiry: "2027-07-21", manufacturer: "Dr. Reddy's", purpose: "Antibiotic" },
  { name: "Pioglitazone", type: "Injection", price: 107.37, stock: 278, expiry: "2026-10-06", manufacturer: "Pfizer", purpose: "Fever reduction" },
  { name: "Amlodipine", type: "Capsule", price: 149.58, stock: 477, expiry: "2028-02-02", manufacturer: "Torrent", purpose: "Antibiotic" },
  { name: "Terbinafine", type: "Suspension", price: 43.99, stock: 400, expiry: "2026-06-26", manufacturer: "Dr. Reddy's", purpose: "Anti-inflammatory" },
  { name: "Ciprofloxacin", type: "Tablet", price: 17.42, stock: 178, expiry: "2026-11-05", manufacturer: "Pfizer", purpose: "Allergy relief" },
  { name: "Ondansetron", type: "Suspension", price: 174.15, stock: 352, expiry: "2027-06-25", manufacturer: "Novartis", purpose: "Antibiotic" },
  { name: "Clotrimazole", type: "Tablet", price: 85.84, stock: 229, expiry: "2027-03-31", manufacturer: "Cipla", purpose: "Diabetes control" },
  { name: "Paracetamol", type: "Tablet", price: 185.69, stock: 128, expiry: "2026-08-07", manufacturer: "Zydus", purpose: "Diabetes control" },
  { name: "Ciprofloxacin", type: "Syrup", price: 22.03, stock: 292, expiry: "2028-01-19", manufacturer: "Pfizer", purpose: "Blood pressure control" },
  { name: "Domperidone", type: "Tablet", price: 92.67, stock: 292, expiry: "2028-03-27", manufacturer: "Dr. Reddy's", purpose: "Diabetes control" },
  { name: "Cefixime", type: "Suspension", price: 38.05, stock: 323, expiry: "2027-03-29", manufacturer: "Sun Pharma", purpose: "Fever reduction" },
  { name: "Metformin", type: "Tablet", price: 30.47, stock: 270, expiry: "2027-10-31", manufacturer: "Glenmark", purpose: "Acid reduction" },
  { name: "Omeprazole", type: "Syrup", price: 79.98, stock: 494, expiry: "2026-06-11", manufacturer: "Cipla", purpose: "Thyroid regulation" },
  { name: "Ranitidine", type: "Tablet", price: 107.88, stock: 86, expiry: "2026-12-26", manufacturer: "Glenmark", purpose: "Antibiotic" },
  { name: "Doxycycline", type: "Suspension", price: 25.84, stock: 392, expiry: "2027-04-27", manufacturer: "Abbott", purpose: "Thyroid regulation" },
  { name: "Montelukast", type: "Syrup", price: 105.99, stock: 162, expiry: "2027-02-16", manufacturer: "Sun Pharma", purpose: "Pain relief" },
  { name: "Praziquantel", type: "Suspension", price: 55.41, stock: 158, expiry: "2027-04-20", manufacturer: "Abbott", purpose: "Blood pressure control" },
  { name: "Iron Folic Acid", type: "Capsule", price: 122.9, stock: 88, expiry: "2026-08-18", manufacturer: "Abbott", purpose: "Fever reduction" },
  { name: "Itraconazole", type: "Tablet", price: 140.65, stock: 339, expiry: "2026-10-12", manufacturer: "Cipla", purpose: "Asthma control" },
  { name: "Ondansetron", type: "Suspension", price: 114.31, stock: 357, expiry: "2026-10-03", manufacturer: "Pfizer", purpose: "Antibiotic" },
  { name: "Glimepiride", type: "Syrup", price: 192.14, stock: 322, expiry: "2026-12-28", manufacturer: "Lupin", purpose: "Antibiotic" },
  { name: "Montelukast", type: "Syrup", price: 190.86, stock: 235, expiry: "2028-02-08", manufacturer: "Novartis", purpose: "Fever reduction" },
  { name: "Terbinafine", type: "Syrup", price: 132.34, stock: 347, expiry: "2027-07-29", manufacturer: "Novartis", purpose: "Pain relief" },
  { name: "Metoprolol", type: "Tablet", price: 142.02, stock: 229, expiry: "2027-05-14", manufacturer: "Dr. Reddy's", purpose: "Allergy relief" },
  { name: "Losartan", type: "Suspension", price: 93.46, stock: 212, expiry: "2026-05-31", manufacturer: "Sun Pharma", purpose: "Thyroid regulation" },
  { name: "Aspirin", type: "Tablet", price: 53.15, stock: 385, expiry: "2027-08-06", manufacturer: "Sun Pharma", purpose: "Anti-inflammatory" },
  { name: "Ondansetron", type: "Tablet", price: 119.63, stock: 192, expiry: "2026-10-22", manufacturer: "Novartis", purpose: "Diabetes control" },
  { name: "Diethylcarbamazine", type: "Tablet", price: 31.13, stock: 300, expiry: "2026-10-09", manufacturer: "Novartis", purpose: "Asthma control" },
  { name: "Calcium Carbonate", type: "Capsule", price: 55.74, stock: 498, expiry: "2027-12-04", manufacturer: "Abbott", purpose: "Allergy relief" },
  { name: "Omeprazole", type: "Syrup", price: 197.0, stock: 199, expiry: "2026-11-05", manufacturer: "Pfizer", purpose: "Vitamin supplement" },
  { name: "Atorvastatin", type: "Capsule", price: 76.17, stock: 443, expiry: "2027-02-26", manufacturer: "Zydus", purpose: "Cholesterol management" },
  { name: "Triamcinolone", type: "Capsule", price: 71.68, stock: 459, expiry: "2027-09-30", manufacturer: "Lupin", purpose: "Thyroid regulation" },
  { name: "Sucralfate", type: "Suspension", price: 168.85, stock: 129, expiry: "2027-12-31", manufacturer: "Dr. Reddy's", purpose: "Diabetes control" },
  { name: "Clotrimazole", type: "Tablet", price: 128.19, stock: 434, expiry: "2026-06-02", manufacturer: "Lupin", purpose: "Antibiotic" },
  { name: "Insulin", type: "Suspension", price: 110.34, stock: 382, expiry: "2027-01-01", manufacturer: "Dr. Reddy's", purpose: "Cholesterol management" },
  { name: "Montelukast", type: "Injection", price: 27.49, stock: 182, expiry: "2026-09-07", manufacturer: "Dr. Reddy's", purpose: "Thyroid regulation" },
  { name: "Loratadine", type: "Injection", price: 162.93, stock: 253, expiry: "2026-07-08", manufacturer: "Zydus", purpose: "Cholesterol management" },
  { name: "Ciprofloxacin", type: "Syrup", price: 48.48, stock: 247, expiry: "2027-03-23", manufacturer: "Glenmark", purpose: "Allergy relief" },
  { name: "Azithromycin", type: "Syrup", price: 184.45, stock: 241, expiry: "2027-07-28", manufacturer: "Glenmark", purpose: "Diabetes control" },
  { name: "Amoxicillin", type: "Injection", price: 44.39, stock: 197, expiry: "2027-11-09", manufacturer: "Glenmark", purpose: "Cholesterol management" },
  { name: "Diclofenac", type: "Injection", price: 129.73, stock: 210, expiry: "2027-02-15", manufacturer: "Dr. Reddy's", purpose: "Asthma control" },
  { name: "Hydrocortisone", type: "Capsule", price: 137.36, stock: 153, expiry: "2028-03-05", manufacturer: "Pfizer", purpose: "Anti-inflammatory" },
  { name: "Methylprednisolone", type: "Capsule", price: 11.57, stock: 460, expiry: "2027-09-25", manufacturer: "Lupin", purpose: "Antibiotic" },
  { name: "Diclofenac", type: "Suspension", price: 129.69, stock: 497, expiry: "2026-10-17", manufacturer: "Novartis", purpose: "Diabetes control" },
  { name: "Insulin", type: "Tablet", price: 133.91, stock: 77, expiry: "2026-11-27", manufacturer: "Lupin", purpose: "Vitamin supplement" },
  { name: "Cefixime", type: "Tablet", price: 62.71, stock: 352, expiry: "2028-03-11", manufacturer: "Cipla", purpose: "Anti-inflammatory" },
  { name: "Ketoconazole", type: "Capsule", price: 139.44, stock: 66, expiry: "2028-01-20", manufacturer: "Zydus", purpose: "Thyroid regulation" },
  { name: "Fluconazole", type: "Injection", price: 60.14, stock: 483, expiry: "2028-03-13", manufacturer: "Glenmark", purpose: "Antibiotic" },
  { name: "Levothyroxine", type: "Tablet", price: 98.12, stock: 348, expiry: "2027-08-31", manufacturer: "Torrent", purpose: "Acid reduction" },
  { name: "Ranitidine", type: "Syrup", price: 33.57, stock: 476, expiry: "2027-11-02", manufacturer: "Novartis", purpose: "Asthma control" },
  { name: "Diethylcarbamazine", type: "Capsule", price: 144.06, stock: 195, expiry: "2027-10-31", manufacturer: "Glenmark", purpose: "Thyroid regulation" },
  { name: "Vitamin D3", type: "Suspension", price: 155.31, stock: 221, expiry: "2026-06-21", manufacturer: "Pfizer", purpose: "Asthma control" },
  { name: "Cefixime", type: "Syrup", price: 164.26, stock: 378, expiry: "2028-03-01", manufacturer: "Torrent", purpose: "Antibiotic" },
  { name: "Ondansetron", type: "Syrup", price: 109.42, stock: 376, expiry: "2027-03-13", manufacturer: "Glenmark", purpose: "Asthma control" },
  { name: "Praziquantel", type: "Syrup", price: 150.22, stock: 316, expiry: "2027-04-05", manufacturer: "Abbott", purpose: "Antibiotic" },
  { name: "Vitamin D3", type: "Injection", price: 180.34, stock: 223, expiry: "2026-06-04", manufacturer: "Zydus", purpose: "Cholesterol management" },
  { name: "Loratadine", type: "Capsule", price: 147.27, stock: 466, expiry: "2027-07-08", manufacturer: "Sun Pharma", purpose: "Allergy relief" },
  { name: "Fluconazole", type: "Capsule", price: 156.76, stock: 379, expiry: "2027-09-09", manufacturer: "Dr. Reddy's", purpose: "Pain relief" },
  { name: "Amoxicillin", type: "Syrup", price: 42.02, stock: 187, expiry: "2027-12-25", manufacturer: "Sun Pharma", purpose: "Antibiotic" },
  { name: "Terbinafine", type: "Tablet", price: 41.69, stock: 253, expiry: "2026-07-07", manufacturer: "Abbott", purpose: "Acid reduction" },
  { name: "Rabeprazole", type: "Tablet", price: 170.45, stock: 254, expiry: "2026-10-31", manufacturer: "Torrent", purpose: "Fever reduction" },
  { name: "Praziquantel", type: "Suspension", price: 133.94, stock: 379, expiry: "2026-11-10", manufacturer: "Dr. Reddy's", purpose: "Cholesterol management" },
  { name: "Calcium Carbonate", type: "Suspension", price: 134.53, stock: 370, expiry: "2027-08-14", manufacturer: "Abbott", purpose: "Diabetes control" },
  { name: "Omeprazole", type: "Injection", price: 182.74, stock: 347, expiry: "2028-01-04", manufacturer: "Novartis", purpose: "Asthma control" },
  { name: "Domperidone", type: "Suspension", price: 153.18, stock: 316, expiry: "2026-09-21", manufacturer: "Sun Pharma", purpose: "Allergy relief" },
  { name: "Omeprazole", type: "Syrup", price: 160.76, stock: 394, expiry: "2026-11-21", manufacturer: "Sun Pharma", purpose: "Allergy relief" },
  { name: "Hydrocortisone", type: "Syrup", price: 138.12, stock: 84, expiry: "2028-01-02", manufacturer: "Zydus", purpose: "Cholesterol management" },
  { name: "Iron Folic Acid", type: "Suspension", price: 176.16, stock: 227, expiry: "2026-11-28", manufacturer: "Torrent", purpose: "Acid reduction" },
  { name: "Fexofenadine", type: "Injection", price: 193.76, stock: 404, expiry: "2028-04-11", manufacturer: "Sun Pharma", purpose: "Acid reduction" },
  { name: "Salbutamol", type: "Suspension", price: 137.0, stock: 259, expiry: "2028-01-23", manufacturer: "Novartis", purpose: "Diabetes control" },
  { name: "Loratadine", type: "Tablet", price: 151.64, stock: 77, expiry: "2027-10-15", manufacturer: "Abbott", purpose: "Cholesterol management" },
  { name: "Losartan", type: "Injection", price: 31.78, stock: 371, expiry: "2027-07-13", manufacturer: "Glenmark", purpose: "Anti-inflammatory" },
  { name: "Sucralfate", type: "Suspension", price: 58.87, stock: 204, expiry: "2026-06-02", manufacturer: "Novartis", purpose: "Blood pressure control" },
  { name: "Methylprednisolone", type: "Syrup", price: 173.3, stock: 497, expiry: "2026-09-23", manufacturer: "Cipla", purpose: "Vitamin supplement" },
  { name: "Diethylcarbamazine", type: "Syrup", price: 130.79, stock: 364, expiry: "2026-05-16", manufacturer: "Zydus", purpose: "Cholesterol management" },
  { name: "Zinc Sulphate", type: "Tablet", price: 77.89, stock: 380, expiry: "2027-12-19", manufacturer: "Zydus", purpose: "Cholesterol management" },
  { name: "Atenolol", type: "Capsule", price: 117.94, stock: 240, expiry: "2027-10-11", manufacturer: "Dr. Reddy's", purpose: "Pain relief" },
  { name: "Domperidone", type: "Injection", price: 15.03, stock: 130, expiry: "2027-11-29", manufacturer: "Torrent", purpose: "Blood pressure control" },
  { name: "Atenolol", type: "Capsule", price: 192.58, stock: 239, expiry: "2027-07-08", manufacturer: "Cipla", purpose: "Anti-inflammatory" },
  { name: "Amlodipine", type: "Suspension", price: 75.87, stock: 143, expiry: "2027-05-15", manufacturer: "Zydus", purpose: "Pain relief" },
  { name: "Praziquantel", type: "Capsule", price: 18.13, stock: 449, expiry: "2027-11-15", manufacturer: "Glenmark", purpose: "Anti-inflammatory" },
  { name: "Terbinafine", type: "Suspension", price: 91.72, stock: 445, expiry: "2027-12-08", manufacturer: "Glenmark", purpose: "Thyroid regulation" },
  { name: "Naproxen", type: "Injection", price: 97.1, stock: 384, expiry: "2027-09-19", manufacturer: "Zydus", purpose: "Asthma control" },
  { name: "Methylprednisolone", type: "Tablet", price: 159.97, stock: 340, expiry: "2027-09-28", manufacturer: "Torrent", purpose: "Cholesterol management" },
  { name: "Amlodipine", type: "Suspension", price: 165.89, stock: 278, expiry: "2027-12-02", manufacturer: "Torrent", purpose: "Antibiotic" },
  { name: "Ranitidine", type: "Suspension", price: 188.45, stock: 417, expiry: "2027-03-26", manufacturer: "Novartis", purpose: "Cholesterol management" },
  { name: "Amlodipine", type: "Capsule", price: 105.47, stock: 277, expiry: "2026-08-23", manufacturer: "Dr. Reddy's", purpose: "Fever reduction" },
  { name: "Domperidone", type: "Syrup", price: 42.11, stock: 370, expiry: "2026-11-21", manufacturer: "Glenmark", purpose: "Asthma control" },
  { name: "Hydrocortisone", type: "Syrup", price: 48.7, stock: 368, expiry: "2027-09-27", manufacturer: "Glenmark", purpose: "Thyroid regulation" },
  { name: "Albendazole", type: "Capsule", price: 82.65, stock: 143, expiry: "2027-12-14", manufacturer: "Lupin", purpose: "Vitamin supplement" },
  { name: "Loratadine", type: "Tablet", price: 192.93, stock: 463, expiry: "2027-08-31", manufacturer: "Dr. Reddy's", purpose: "Allergy relief" },
  { name: "Famotidine", type: "Tablet", price: 177.67, stock: 150, expiry: "2027-03-15", manufacturer: "Dr. Reddy's", purpose: "Fever reduction" },
  { name: "Itraconazole", type: "Tablet", price: 171.48, stock: 477, expiry: "2026-07-12", manufacturer: "Sun Pharma", purpose: "Anti-inflammatory" },
  { name: "Fluconazole", type: "Capsule", price: 184.98, stock: 65, expiry: "2027-02-06", manufacturer: "Cipla", purpose: "Thyroid regulation" },
  { name: "Aspirin", type: "Capsule", price: 88.88, stock: 415, expiry: "2027-06-13", manufacturer: "Novartis", purpose: "Asthma control" },
  { name: "Montelukast", type: "Capsule", price: 137.14, stock: 349, expiry: "2027-03-12", manufacturer: "Sun Pharma", purpose: "Acid reduction" },
  { name: "Mebendazole", type: "Tablet", price: 69.39, stock: 164, expiry: "2027-06-19", manufacturer: "Cipla", purpose: "Fever reduction" },
  { name: "Domperidone", type: "Injection", price: 137.93, stock: 117, expiry: "2027-07-18", manufacturer: "Zydus", purpose: "Anti-inflammatory" },
  { name: "Ivermectin", type: "Injection", price: 49.77, stock: 447, expiry: "2026-10-17", manufacturer: "Abbott", purpose: "Asthma control" },
  { name: "Glimepiride", type: "Tablet", price: 163.99, stock: 413, expiry: "2028-03-05", manufacturer: "Torrent", purpose: "Anti-inflammatory" },
  { name: "Montelukast", type: "Syrup", price: 10.81, stock: 214, expiry: "2028-01-04", manufacturer: "Novartis", purpose: "Acid reduction" },
  { name: "Linagliptin", type: "Suspension", price: 93.94, stock: 438, expiry: "2027-02-17", manufacturer: "Dr. Reddy's", purpose: "Acid reduction" },
  { name: "Betamethasone", type: "Syrup", price: 195.34, stock: 326, expiry: "2026-07-03", manufacturer: "Novartis", purpose: "Vitamin supplement" },
  { name: "Insulin", type: "Suspension", price: 171.41, stock: 458, expiry: "2028-03-08", manufacturer: "Lupin", purpose: "Fever reduction" },
  { name: "Amlodipine", type: "Injection", price: 183.16, stock: 412, expiry: "2026-08-02", manufacturer: "Zydus", purpose: "Antibiotic" },
  { name: "Fexofenadine", type: "Syrup", price: 112.72, stock: 319, expiry: "2027-06-25", manufacturer: "Glenmark", purpose: "Antibiotic" },
  { name: "Calcium Carbonate", type: "Capsule", price: 36.86, stock: 180, expiry: "2027-08-05", manufacturer: "Glenmark", purpose: "Fever reduction" },
  { name: "Levothyroxine", type: "Injection", price: 15.4, stock: 240, expiry: "2028-03-05", manufacturer: "Torrent", purpose: "Thyroid regulation" },
  { name: "Zinc Sulphate", type: "Injection", price: 135.29, stock: 133, expiry: "2027-10-11", manufacturer: "Glenmark", purpose: "Blood pressure control" },
  { name: "Levothyroxine", type: "Syrup", price: 119.31, stock: 181, expiry: "2026-09-26", manufacturer: "Lupin", purpose: "Allergy relief" },
  { name: "Levothyroxine", type: "Syrup", price: 53.69, stock: 136, expiry: "2026-06-25", manufacturer: "Pfizer", purpose: "Diabetes control" },
  { name: "Famotidine", type: "Suspension", price: 47.06, stock: 414, expiry: "2026-10-29", manufacturer: "Glenmark", purpose: "Fever reduction" },
  { name: "Calcium Carbonate", type: "Suspension", price: 25.42, stock: 483, expiry: "2027-08-03", manufacturer: "Novartis", purpose: "Asthma control" },
  { name: "Praziquantel", type: "Suspension", price: 153.35, stock: 383, expiry: "2027-08-10", manufacturer: "Abbott", purpose: "Allergy relief" },
  { name: "Triamcinolone", type: "Suspension", price: 38.66, stock: 73, expiry: "2026-09-09", manufacturer: "Lupin", purpose: "Asthma control" },
  { name: "Amoxicillin", type: "Capsule", price: 144.1, stock: 202, expiry: "2026-06-17", manufacturer: "Abbott", purpose: "Acid reduction" },
  { name: "Betamethasone", type: "Tablet", price: 19.1, stock: 354, expiry: "2026-06-15", manufacturer: "Glenmark", purpose: "Cholesterol management" },
  { name: "Albendazole", type: "Capsule", price: 53.14, stock: 433, expiry: "2026-08-10", manufacturer: "Pfizer", purpose: "Antibiotic" },
  { name: "Ketoconazole", type: "Suspension", price: 137.66, stock: 324, expiry: "2026-12-28", manufacturer: "Lupin", purpose: "Asthma control" },
  { name: "Iron Folic Acid", type: "Tablet", price: 54.96, stock: 107, expiry: "2026-11-01", manufacturer: "Novartis", purpose: "Vitamin supplement" },
  { name: "Domperidone", type: "Injection", price: 45.03, stock: 77, expiry: "2026-07-04", manufacturer: "Novartis", purpose: "Fever reduction" },
  { name: "Betamethasone", type: "Injection", price: 134.49, stock: 417, expiry: "2026-10-17", manufacturer: "Novartis", purpose: "Allergy relief" },
  { name: "Ondansetron", type: "Injection", price: 183.02, stock: 109, expiry: "2027-05-21", manufacturer: "Sun Pharma", purpose: "Pain relief" },
  { name: "Amlodipine", type: "Injection", price: 135.71, stock: 404, expiry: "2026-09-20", manufacturer: "Lupin", purpose: "Vitamin supplement" },
  { name: "Diethylcarbamazine", type: "Capsule", price: 184.2, stock: 308, expiry: "2027-06-19", manufacturer: "Cipla", purpose: "Asthma control" },
  { name: "Multivitamins", type: "Tablet", price: 54.46, stock: 484, expiry: "2027-08-19", manufacturer: "Novartis", purpose: "Blood pressure control" },
  { name: "Montelukast", type: "Capsule", price: 17.21, stock: 438, expiry: "2026-10-08", manufacturer: "Dr. Reddy's", purpose: "Antibiotic" },
  { name: "Loratadine", type: "Syrup", price: 117.8, stock: 349, expiry: "2028-01-05", manufacturer: "Novartis", purpose: "Vitamin supplement" },
  { name: "Ivermectin", type: "Capsule", price: 89.81, stock: 120, expiry: "2027-07-12", manufacturer: "Glenmark", purpose: "Thyroid regulation" },
  { name: "Terbinafine", type: "Syrup", price: 20.23, stock: 464, expiry: "2028-02-08", manufacturer: "Torrent", purpose: "Fever reduction" },
  { name: "Metformin", type: "Syrup", price: 55.28, stock: 133, expiry: "2026-11-22", manufacturer: "Glenmark", purpose: "Anti-inflammatory" },
  { name: "Betamethasone", type: "Syrup", price: 123.33, stock: 481, expiry: "2027-01-23", manufacturer: "Torrent", purpose: "Allergy relief" },
  { name: "Montelukast", type: "Capsule", price: 74.83, stock: 390, expiry: "2028-03-07", manufacturer: "Sun Pharma", purpose: "Thyroid regulation" },
  { name: "Loratadine", type: "Syrup", price: 185.53, stock: 344, expiry: "2026-07-22", manufacturer: "Torrent", purpose: "Blood pressure control" },
  { name: "Multivitamins", type: "Capsule", price: 131.31, stock: 221, expiry: "2028-04-12", manufacturer: "Cipla", purpose: "Asthma control" },
  { name: "Glimepiride", type: "Syrup", price: 56.59, stock: 148, expiry: "2026-07-05", manufacturer: "Torrent", purpose: "Antibiotic" },
  { name: "Linagliptin", type: "Suspension", price: 30.34, stock: 258, expiry: "2026-12-03", manufacturer: "Torrent", purpose: "Anti-inflammatory" },
  { name: "Linagliptin", type: "Capsule", price: 191.56, stock: 232, expiry: "2026-08-27", manufacturer: "Novartis", purpose: "Acid reduction" },
  { name: "Fexofenadine", type: "Tablet", price: 121.19, stock: 164, expiry: "2027-09-13", manufacturer: "Torrent", purpose: "Asthma control" },
  { name: "Pantoprazole", type: "Syrup", price: 22.44, stock: 212, expiry: "2026-06-06", manufacturer: "Cipla", purpose: "Pain relief" },
  { name: "Linagliptin", type: "Capsule", price: 151.17, stock: 491, expiry: "2027-10-25", manufacturer: "Dr. Reddy's", purpose: "Cholesterol management" },
  { name: "Amoxicillin", type: "Suspension", price: 138.2, stock: 346, expiry: "2027-05-02", manufacturer: "Novartis", purpose: "Thyroid regulation" },
  { name: "Betamethasone", type: "Suspension", price: 156.56, stock: 205, expiry: "2027-03-03", manufacturer: "Torrent", purpose: "Antibiotic" },
  { name: "Albendazole", type: "Injection", price: 199.16, stock: 456, expiry: "2026-10-18", manufacturer: "Novartis", purpose: "Anti-inflammatory" },
  { name: "Fexofenadine", type: "Capsule", price: 91.92, stock: 333, expiry: "2027-08-19", manufacturer: "Sun Pharma", purpose: "Pain relief" },
  { name: "Multivitamins", type: "Tablet", price: 16.32, stock: 179, expiry: "2027-10-16", manufacturer: "Torrent", purpose: "Anti-inflammatory" },
  { name: "Itraconazole", type: "Syrup", price: 40.34, stock: 233, expiry: "2027-06-25", manufacturer: "Pfizer", purpose: "Diabetes control" },
  { name: "Vitamin D3", type: "Capsule", price: 193.93, stock: 496, expiry: "2028-02-22", manufacturer: "Novartis", purpose: "Anti-inflammatory" },
  { name: "Ketoconazole", type: "Tablet", price: 193.05, stock: 228, expiry: "2027-12-20", manufacturer: "Zydus", purpose: "Asthma control" },
  { name: "Methylprednisolone", type: "Syrup", price: 33.71, stock: 432, expiry: "2026-08-21", manufacturer: "Sun Pharma", purpose: "Asthma control" },
  { name: "Praziquantel", type: "Tablet", price: 22.63, stock: 415, expiry: "2027-10-18", manufacturer: "Novartis", purpose: "Cholesterol management" },
  { name: "Atenolol", type: "Suspension", price: 145.21, stock: 399, expiry: "2026-07-08", manufacturer: "Abbott", purpose: "Anti-inflammatory" },
  { name: "Linagliptin", type: "Suspension", price: 13.8, stock: 380, expiry: "2026-08-20", manufacturer: "Novartis", purpose: "Acid reduction" },
  { name: "Linagliptin", type: "Tablet", price: 45.34, stock: 496, expiry: "2027-11-10", manufacturer: "Pfizer", purpose: "Acid reduction" },
  { name: "Metformin", type: "Capsule", price: 145.53, stock: 438, expiry: "2026-08-31", manufacturer: "Lupin", purpose: "Acid reduction" },
  { name: "Multivitamins", type: "Suspension", price: 125.5, stock: 169, expiry: "2027-09-08", manufacturer: "Lupin", purpose: "Vitamin supplement" },
  { name: "Amoxicillin", type: "Capsule", price: 135.68, stock: 333, expiry: "2028-03-12", manufacturer: "Torrent", purpose: "Acid reduction" },
  { name: "Pantoprazole", type: "Tablet", price: 68.78, stock: 281, expiry: "2028-01-11", manufacturer: "Pfizer", purpose: "Asthma control" },
  { name: "Praziquantel", type: "Suspension", price: 36.02, stock: 312, expiry: "2027-06-01", manufacturer: "Cipla", purpose: "Fever reduction" },
  { name: "Ivermectin", type: "Capsule", price: 17.93, stock: 409, expiry: "2027-06-27", manufacturer: "Lupin", purpose: "Blood pressure control" },
  { name: "Praziquantel", type: "Suspension", price: 18.34, stock: 295, expiry: "2027-01-06", manufacturer: "Lupin", purpose: "Cholesterol management" },
  { name: "Calcium Carbonate", type: "Syrup", price: 171.91, stock: 261, expiry: "2028-02-10", manufacturer: "Cipla", purpose: "Blood pressure control" },
  { name: "Salbutamol", type: "Injection", price: 113.02, stock: 472, expiry: "2026-10-16", manufacturer: "Zydus", purpose: "Pain relief" },
  { name: "Hydrocortisone", type: "Tablet", price: 60.99, stock: 301, expiry: "2027-12-08", manufacturer: "Novartis", purpose: "Cholesterol management" },
  { name: "Fexofenadine", type: "Tablet", price: 111.05, stock: 89, expiry: "2026-07-01", manufacturer: "Torrent", purpose: "Blood pressure control" },
  { name: "Domperidone", type: "Capsule", price: 157.54, stock: 236, expiry: "2026-06-06", manufacturer: "Cipla", purpose: "Fever reduction" },
  { name: "Metoprolol", type: "Injection", price: 26.04, stock: 378, expiry: "2026-11-02", manufacturer: "Novartis", purpose: "Allergy relief" },
  { name: "Prednisolone", type: "Injection", price: 182.79, stock: 429, expiry: "2027-11-19", manufacturer: "Cipla", purpose: "Pain relief" },
  { name: "Multivitamins", type: "Capsule", price: 119.1, stock: 144, expiry: "2027-01-27", manufacturer: "Novartis", purpose: "Blood pressure control" },
  { name: "Methylprednisolone", type: "Syrup", price: 82.89, stock: 424, expiry: "2027-06-13", manufacturer: "Novartis", purpose: "Diabetes control" },
  { name: "Pantoprazole", type: "Syrup", price: 54.97, stock: 65, expiry: "2026-10-13", manufacturer: "Pfizer", purpose: "Asthma control" },
  { name: "Triamcinolone", type: "Suspension", price: 131.61, stock: 408, expiry: "2027-10-16", manufacturer: "Abbott", purpose: "Antibiotic" },
  { name: "Pioglitazone", type: "Capsule", price: 127.39, stock: 363, expiry: "2026-06-01", manufacturer: "Torrent", purpose: "Anti-inflammatory" },
  { name: "Fluconazole", type: "Suspension", price: 157.8, stock: 260, expiry: "2028-01-07", manufacturer: "Glenmark", purpose: "Antibiotic" },
  { name: "Loratadine", type: "Capsule", price: 107.45, stock: 188, expiry: "2026-11-01", manufacturer: "Dr. Reddy's", purpose: "Anti-inflammatory" },
  { name: "Glimepiride", type: "Suspension", price: 78.63, stock: 376, expiry: "2027-01-03", manufacturer: "Torrent", purpose: "Antibiotic" },
  { name: "Omeprazole", type: "Tablet", price: 83.98, stock: 278, expiry: "2027-07-02", manufacturer: "Torrent", purpose: "Asthma control" },
  { name: "Naproxen", type: "Suspension", price: 171.83, stock: 224, expiry: "2027-03-08", manufacturer: "Sun Pharma", purpose: "Blood pressure control" },
  { name: "Rabeprazole", type: "Syrup", price: 197.16, stock: 274, expiry: "2027-08-03", manufacturer: "Cipla", purpose: "Fever reduction" },
  { name: "Loratadine", type: "Capsule", price: 123.3, stock: 477, expiry: "2027-03-02", manufacturer: "Abbott", purpose: "Antibiotic" },
  { name: "Mebendazole", type: "Suspension", price: 154.22, stock: 327, expiry: "2027-02-24", manufacturer: "Pfizer", purpose: "Allergy relief" },
  { name: "Pantoprazole", type: "Capsule", price: 140.9, stock: 345, expiry: "2027-11-05", manufacturer: "Glenmark", purpose: "Antibiotic" },
  { name: "Salbutamol", type: "Tablet", price: 135.42, stock: 343, expiry: "2026-10-05", manufacturer: "Novartis", purpose: "Blood pressure control" },
  { name: "Doxycycline", type: "Suspension", price: 147.76, stock: 158, expiry: "2027-08-13", manufacturer: "Lupin", purpose: "Cholesterol management" },
  { name: "Methylprednisolone", type: "Syrup", price: 174.66, stock: 445, expiry: "2026-12-29", manufacturer: "Novartis", purpose: "Vitamin supplement" },
  { name: "Aspirin", type: "Injection", price: 188.14, stock: 212, expiry: "2027-08-06", manufacturer: "Dr. Reddy's", purpose: "Allergy relief" },
  { name: "Metoprolol", type: "Tablet", price: 26.62, stock: 163, expiry: "2026-08-04", manufacturer: "Sun Pharma", purpose: "Allergy relief" },
  { name: "Ciprofloxacin", type: "Suspension", price: 143.05, stock: 120, expiry: "2026-07-09", manufacturer: "Abbott", purpose: "Fever reduction" },
  { name: "Cefixime", type: "Tablet", price: 45.22, stock: 238, expiry: "2026-08-16", manufacturer: "Cipla", purpose: "Allergy relief" },
  { name: "Ketoconazole", type: "Capsule", price: 117.56, stock: 229, expiry: "2027-05-31", manufacturer: "Novartis", purpose: "Vitamin supplement" },
  { name: "Cefixime", type: "Tablet", price: 50.87, stock: 293, expiry: "2027-05-27", manufacturer: "Pfizer", purpose: "Asthma control" },
  { name: "Triamcinolone", type: "Injection", price: 175.98, stock: 167, expiry: "2028-01-22", manufacturer: "Glenmark", purpose: "Acid reduction" },
  { name: "Famotidine", type: "Tablet", price: 81.9, stock: 241, expiry: "2027-01-17", manufacturer: "Sun Pharma", purpose: "Pain relief" },
  { name: "Albendazole", type: "Injection", price: 192.07, stock: 180, expiry: "2027-03-24", manufacturer: "Glenmark", purpose: "Antibiotic" },
  { name: "Diethylcarbamazine", type: "Suspension", price: 66.67, stock: 66, expiry: "2027-03-06", manufacturer: "Torrent", purpose: "Diabetes control" },
  { name: "Pioglitazone", type: "Tablet", price: 130.1, stock: 384, expiry: "2028-04-02", manufacturer: "Glenmark", purpose: "Allergy relief" },
  { name: "Triamcinolone", type: "Tablet", price: 110.62, stock: 452, expiry: "2027-12-30", manufacturer: "Novartis", purpose: "Allergy relief" },
  { name: "Hydrocortisone", type: "Capsule", price: 109.32, stock: 175, expiry: "2026-07-23", manufacturer: "Abbott", purpose: "Pain relief" },
  { name: "Metformin", type: "Tablet", price: 51.1, stock: 284, expiry: "2027-02-09", manufacturer: "Novartis", purpose: "Diabetes control" },
  { name: "Vitamin D3", type: "Injection", price: 113.28, stock: 365, expiry: "2028-02-22", manufacturer: "Cipla", purpose: "Anti-inflammatory" },
  { name: "Cetirizine", type: "Syrup", price: 65.69, stock: 318, expiry: "2028-03-20", manufacturer: "Sun Pharma", purpose: "Diabetes control" },
  { name: "Multivitamins", type: "Suspension", price: 169.68, stock: 299, expiry: "2028-02-25", manufacturer: "Pfizer", purpose: "Acid reduction" },
  { name: "Zinc Sulphate", type: "Syrup", price: 107.59, stock: 53, expiry: "2028-03-21", manufacturer: "Torrent", purpose: "Anti-inflammatory" },
  { name: "Metoprolol", type: "Injection", price: 109.63, stock: 169, expiry: "2026-08-04", manufacturer: "Glenmark", purpose: "Blood pressure control" },
  { name: "Azithromycin", type: "Injection", price: 190.95, stock: 215, expiry: "2026-10-05", manufacturer: "Lupin", purpose: "Thyroid regulation" },
  { name: "Ketoconazole", type: "Injection", price: 190.25, stock: 410, expiry: "2026-09-10", manufacturer: "Dr. Reddy's", purpose: "Acid reduction" },
  { name: "Ondansetron", type: "Capsule", price: 14.06, stock: 425, expiry: "2027-05-16", manufacturer: "Sun Pharma", purpose: "Diabetes control" },
  { name: "Amlodipine", type: "Injection", price: 139.46, stock: 333, expiry: "2027-07-08", manufacturer: "Novartis", purpose: "Asthma control" },
  { name: "Doxycycline", type: "Injection", price: 160.84, stock: 264, expiry: "2027-12-14", manufacturer: "Dr. Reddy's", purpose: "Vitamin supplement" },
  { name: "Levothyroxine", type: "Injection", price: 24.85, stock: 353, expiry: "2027-01-26", manufacturer: "Dr. Reddy's", purpose: "Fever reduction" },
  { name: "Ketoconazole", type: "Syrup", price: 91.13, stock: 175, expiry: "2028-04-10", manufacturer: "Lupin", purpose: "Vitamin supplement" },
  { name: "Prednisolone", type: "Tablet", price: 146.42, stock: 312, expiry: "2028-04-04", manufacturer: "Dr. Reddy's", purpose: "Thyroid regulation" },
  { name: "Ciprofloxacin", type: "Injection", price: 148.02, stock: 266, expiry: "2027-05-11", manufacturer: "Torrent", purpose: "Allergy relief" },
  { name: "Metformin", type: "Injection", price: 110.52, stock: 364, expiry: "2027-10-15", manufacturer: "Dr. Reddy's", purpose: "Allergy relief" },
  { name: "Insulin", type: "Suspension", price: 121.67, stock: 117, expiry: "2027-08-22", manufacturer: "Glenmark", purpose: "Blood pressure control" },
  { name: "Ketoconazole", type: "Tablet", price: 104.83, stock: 165, expiry: "2027-01-25", manufacturer: "Glenmark", purpose: "Thyroid regulation" },
  { name: "Itraconazole", type: "Suspension", price: 91.53, stock: 70, expiry: "2026-11-17", manufacturer: "Novartis", purpose: "Asthma control" },
  { name: "Itraconazole", type: "Suspension", price: 163.1, stock: 330, expiry: "2026-12-04", manufacturer: "Dr. Reddy's", purpose: "Fever reduction" },
  { name: "Diclofenac", type: "Suspension", price: 158.12, stock: 277, expiry: "2027-02-02", manufacturer: "Torrent", purpose: "Anti-inflammatory" },
  { name: "Multivitamins", type: "Capsule", price: 116.8, stock: 224, expiry: "2028-02-05", manufacturer: "Abbott", purpose: "Fever reduction" },
  { name: "Praziquantel", type: "Suspension", price: 37.99, stock: 205, expiry: "2027-07-06", manufacturer: "Cipla", purpose: "Thyroid regulation" },
  { name: "Cefixime", type: "Injection", price: 58.25, stock: 74, expiry: "2026-08-26", manufacturer: "Lupin", purpose: "Antibiotic" },
  { name: "Hydrocortisone", type: "Syrup", price: 34.04, stock: 489, expiry: "2027-10-02", manufacturer: "Abbott", purpose: "Diabetes control" },
  { name: "Diclofenac", type: "Capsule", price: 193.23, stock: 314, expiry: "2027-09-16", manufacturer: "Pfizer", purpose: "Acid reduction" },
  { name: "Calcium Carbonate", type: "Syrup", price: 33.7, stock: 156, expiry: "2027-01-06", manufacturer: "Zydus", purpose: "Acid reduction" },
  { name: "Domperidone", type: "Injection", price: 190.11, stock: 450, expiry: "2027-07-23", manufacturer: "Dr. Reddy's", purpose: "Acid reduction" },
  { name: "Terbinafine", type: "Capsule", price: 150.02, stock: 86, expiry: "2027-01-04", manufacturer: "Dr. Reddy's", purpose: "Vitamin supplement" },
  { name: "Insulin", type: "Suspension", price: 155.53, stock: 132, expiry: "2027-03-27", manufacturer: "Sun Pharma", purpose: "Diabetes control" },
  { name: "Multivitamins", type: "Suspension", price: 58.53, stock: 93, expiry: "2027-06-25", manufacturer: "Dr. Reddy's", purpose: "Thyroid regulation" },
  { name: "Omeprazole", type: "Syrup", price: 22.19, stock: 400, expiry: "2026-12-22", manufacturer: "Abbott", purpose: "Vitamin supplement" },
  { name: "Omeprazole", type: "Syrup", price: 195.44, stock: 466, expiry: "2027-07-13", manufacturer: "Lupin", purpose: "Allergy relief" },
  { name: "Insulin", type: "Syrup", price: 110.34, stock: 181, expiry: "2027-11-25", manufacturer: "Abbott", purpose: "Cholesterol management" },
  { name: "Linagliptin", type: "Capsule", price: 192.66, stock: 464, expiry: "2026-06-10", manufacturer: "Zydus", purpose: "Antibiotic" },
  { name: "Betamethasone", type: "Capsule", price: 177.05, stock: 97, expiry: "2027-02-21", manufacturer: "Torrent", purpose: "Cholesterol management" },
  { name: "Multivitamins", type: "Suspension", price: 82.12, stock: 81, expiry: "2027-12-07", manufacturer: "Zydus", purpose: "Diabetes control" },
  { name: "Ketoconazole", type: "Suspension", price: 41.57, stock: 486, expiry: "2027-04-20", manufacturer: "Novartis", purpose: "Asthma control" },
  { name: "Amlodipine", type: "Syrup", price: 72.12, stock: 322, expiry: "2026-08-05", manufacturer: "Torrent", purpose: "Blood pressure control" },
  { name: "Methylprednisolone", type: "Syrup", price: 147.3, stock: 59, expiry: "2026-09-22", manufacturer: "Lupin", purpose: "Diabetes control" },
  { name: "Cefixime", type: "Syrup", price: 112.37, stock: 181, expiry: "2028-02-17", manufacturer: "Pfizer", purpose: "Vitamin supplement" },
  { name: "Pioglitazone", type: "Suspension", price: 150.48, stock: 132, expiry: "2026-05-25", manufacturer: "Cipla", purpose: "Acid reduction" },
  { name: "Praziquantel", type: "Tablet", price: 187.97, stock: 456, expiry: "2027-01-26", manufacturer: "Pfizer", purpose: "Allergy relief" },
  { name: "Clotrimazole", type: "Suspension", price: 126.29, stock: 122, expiry: "2028-04-14", manufacturer: "Torrent", purpose: "Blood pressure control" },
  { name: "Pantoprazole", type: "Capsule", price: 120.92, stock: 427, expiry: "2027-08-04", manufacturer: "Pfizer", purpose: "Cholesterol management" },
  { name: "Famotidine", type: "Syrup", price: 138.55, stock: 477, expiry: "2026-12-01", manufacturer: "Dr. Reddy's", purpose: "Diabetes control" },
  { name: "Famotidine", type: "Injection", price: 163.22, stock: 167, expiry: "2027-09-05", manufacturer: "Sun Pharma", purpose: "Thyroid regulation" },
  { name: "Linagliptin", type: "Injection", price: 102.28, stock: 130, expiry: "2026-06-05", manufacturer: "Cipla", purpose: "Diabetes control" },
  { name: "Cetirizine", type: "Suspension", price: 19.51, stock: 455, expiry: "2026-10-26", manufacturer: "Torrent", purpose: "Diabetes control" },
  { name: "Doxycycline", type: "Syrup", price: 43.42, stock: 155, expiry: "2026-05-17", manufacturer: "Dr. Reddy's", purpose: "Cholesterol management" },
  { name: "Naproxen", type: "Syrup", price: 183.38, stock: 236, expiry: "2027-07-16", manufacturer: "Zydus", purpose: "Cholesterol management" },
  { name: "Insulin", type: "Syrup", price: 11.68, stock: 449, expiry: "2027-04-09", manufacturer: "Torrent", purpose: "Diabetes control" },
  { name: "Aspirin", type: "Syrup", price: 83.93, stock: 500, expiry: "2028-01-13", manufacturer: "Sun Pharma", purpose: "Acid reduction" },
  { name: "Fluconazole", type: "Syrup", price: 80.94, stock: 212, expiry: "2026-10-24", manufacturer: "Zydus", purpose: "Vitamin supplement" },
  { name: "Fexofenadine", type: "Injection", price: 93.27, stock: 175, expiry: "2028-02-10", manufacturer: "Glenmark", purpose: "Acid reduction" },
  { name: "Paracetamol", type: "Suspension", price: 155.22, stock: 237, expiry: "2027-06-24", manufacturer: "Zydus", purpose: "Allergy relief" },
  { name: "Atorvastatin", type: "Syrup", price: 56.14, stock: 85, expiry: "2027-03-19", manufacturer: "Torrent", purpose: "Diabetes control" },
  { name: "Diethylcarbamazine", type: "Suspension", price: 32.18, stock: 400, expiry: "2027-02-04", manufacturer: "Cipla", purpose: "Allergy relief" },
  { name: "Vitamin D3", type: "Suspension", price: 162.69, stock: 244, expiry: "2028-01-07", manufacturer: "Sun Pharma", purpose: "Blood pressure control" },
  { name: "Cetirizine", type: "Suspension", price: 71.13, stock: 396, expiry: "2026-12-01", manufacturer: "Glenmark", purpose: "Asthma control" },
  { name: "Cetirizine", type: "Tablet", price: 130.15, stock: 306, expiry: "2027-05-07", manufacturer: "Pfizer", purpose: "Allergy relief" },
  { name: "Loratadine", type: "Syrup", price: 130.59, stock: 399, expiry: "2026-06-29", manufacturer: "Abbott", purpose: "Acid reduction" },
  { name: "Vitamin D3", type: "Syrup", price: 60.61, stock: 161, expiry: "2028-04-09", manufacturer: "Glenmark", purpose: "Anti-inflammatory" },
  { name: "Betamethasone", type: "Tablet", price: 132.43, stock: 130, expiry: "2027-07-16", manufacturer: "Novartis", purpose: "Acid reduction" },
  { name: "Amoxicillin", type: "Capsule", price: 67.02, stock: 161, expiry: "2027-05-09", manufacturer: "Sun Pharma", purpose: "Thyroid regulation" },
  { name: "Cefixime", type: "Tablet", price: 22.63, stock: 214, expiry: "2026-06-26", manufacturer: "Cipla", purpose: "Pain relief" },
];

        // Login function
        function login(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Simple authentication (in real app, this would be server-side)
            if (username === 'admin' && password === 'admin123') {
                document.querySelector('.login-form').classList.remove('active');
                document.querySelector('.dashboard').classList.add('active');
                document.querySelector('.logout-btn').classList.remove('hidden');
                
                // Load sample data
                loadSampleData();
                updateStats();
                renderMedicines();
            } else {
                alert('Invalid credentials! Please try again.');
            }
        }

        // Logout function
        function logout() {
            document.querySelector('.dashboard').classList.remove('active');
            document.querySelector('.login-form').classList.add('active');
            document.querySelector('.logout-btn').classList.add('hidden');
            
            // Clear form data
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        }

        // Load sample data
        function loadSampleData() {
            if (medicines.length === 0) {
                medicines = sampleMedicines.map(med => ({
                    ...med,
                    id: nextId++
                }));
            }
        }

        // Add medicine function
        function addMedicine(event) {
            event.preventDefault();
            
            const medicine = {
                id: nextId++,
                name: document.getElementById('medicineName').value,
                type: document.getElementById('medicineType').value,
                price: parseFloat(document.getElementById('medicinePrice').value),
                stock: parseInt(document.getElementById('medicineStock').value),
                expiry: document.getElementById('medicineExpiry').value,
                manufacturer: document.getElementById('medicineManufacturer').value
            };

            medicines.push(medicine);
            updateStats();
            renderMedicines();
            clearForm();
            
            // Show success message
            alert('Medicine added successfully!');
        }

        // Clear form function
        function clearForm() {
            document.getElementById('medicineName').value = '';
            document.getElementById('medicineType').value = '';
            document.getElementById('medicinePrice').value = '';
            document.getElementById('medicineStock').value = '';
            document.getElementById('medicineExpiry').value = '';
            document.getElementById('medicineManufacturer').value = '';
        }

        // Edit medicine function
        function editMedicine(id) {
            const medicine = medicines.find(m => m.id === id);
            if (medicine) {
                document.getElementById('editId').value = medicine.id;
                document.getElementById('editName').value = medicine.name;
                document.getElementById('editType').value = medicine.type;
                document.getElementById('editPrice').value = medicine.price;
                document.getElementById('editStock').value = medicine.stock;
                document.getElementById('editExpiry').value = medicine.expiry;
                document.getElementById('editManufacturer').value = medicine.manufacturer;
                
                document.getElementById('editModal').style.display = 'flex';
            }
        }

        // Update medicine function
        function updateMedicine(event) {
            event.preventDefault();
            
            const id = parseInt(document.getElementById('editId').value);
            const medicineIndex = medicines.findIndex(m => m.id === id);
            
            if (medicineIndex !== -1) {
                medicines[medicineIndex] = {
                    id: id,
                    name: document.getElementById('editName').value,
                    type: document.getElementById('editType').value,
                    price: parseFloat(document.getElementById('editPrice').value),
                    stock: parseInt(document.getElementById('editStock').value),
                    expiry: document.getElementById('editExpiry').value,
                    manufacturer: document.getElementById('editManufacturer').value
                };
                
                updateStats();
                renderMedicines();
                closeEditModal();
                alert('Medicine updated successfully!');
            }
        }

        // Close edit modal
        function closeEditModal() {
            document.getElementById('editModal').style.display = 'none';
        }

        // Delete medicine function
        function deleteMedicine(id) {
            if (confirm('Are you sure you want to delete this medicine?')) {
                medicines = medicines.filter(m => m.id !== id);
                updateStats();
                renderMedicines();
                alert('Medicine deleted successfully!');
            }
        }

        // Search medicines function
        function searchMedicines() {
            const searchTerm = document.getElementById('searchBox').value.toLowerCase();
            renderMedicines(searchTerm);
        }

        // Update statistics
        function updateStats() {
            const total = medicines.length;
            const inStock = medicines.filter(m => m.stock > 10).length;
            const lowStock = medicines.filter(m => m.stock <= 10).length;

            document.getElementById('totalMedicines').textContent = total;
            document.getElementById('inStock').textContent = inStock;
            document.getElementById('lowStock').textContent = lowStock;
        }

        // Render medicines grid
        function renderMedicines(searchTerm = '') {
            const grid = document.getElementById('medicinesGrid');
            let filteredMedicines = medicines;

            if (searchTerm) {
                filteredMedicines = medicines.filter(medicine =>
                    medicine.name.toLowerCase().includes(searchTerm) ||
                    medicine.type.toLowerCase().includes(searchTerm) ||
                    medicine.manufacturer.toLowerCase().includes(searchTerm)
                );
            }

            if (filteredMedicines.length === 0) {
                grid.innerHTML = '<div style="text-align: center; padding: 40px; color: #7f8c8d; font-size: 1.2em;">No medicines found</div>';
                return;
            }

            grid.innerHTML = filteredMedicines.map(medicine => `
                <div class="medicine-card">
                    <h3>${medicine.name}</h3>
                    <div class="medicine-info">
                        <div class="info-item">
                            <span class="info-label">Type</span>
                            <span class="info-value">${medicine.type}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Price</span>
                            <span class="info-value">₹${medicine.price.toFixed(2)}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Stock</span>
                            <span class="info-value" style="color: ${medicine.stock <= 10 ? '#e74c3c' : '#27ae60'}">${medicine.stock}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Expiry</span>
                            <span class="info-value">${new Date(medicine.expiry).toLocaleDateString()}</span>
                        </div>
                    </div>
                    <div class="info-item" style="grid-column: 1 / -1; margin-top: 10px;">
                        <span class="info-label">Manufacturer</span>
                        <span class="info-value">${medicine.manufacturer}</span>
                    </div>
                    <div class="info-item" style="grid-column: 1 / -1; margin-top: 10px;">
                        <span class="info-label">Purpose</span>
                        <span class="info-value">${medicine.purpose}</span>
                    </div>
                    <div class="card-actions">
                        <button class="btn btn-success" onclick="editMedicine(${medicine.id})">Edit</button>
                        <button class="btn btn-danger" onclick="deleteMedicine(${medicine.id})">Delete</button>
                    </div>
                </div>
            `).join('');
        }

        // Close modal when clicking outside
        document.getElementById('editModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeEditModal();
            }
        });
