<img src="normalize-this.jpg" width="400">

- Patient
  - id (pk)
  - sex
  - age
  - weight
  - last_weighed_date
  - is_pregnant
  - primary_physician_id (fk)
  - specialist_id (fk)

- Physician
  - id (pk)
  - name
  - phone
  - email

- Specialist
  - id (pk)
  - name
  - phone
  - email

- AllergyPatient (join table)
  - id (pk)
  - patient_id (fk)
  - allergy_id (fk)

- Allergy
  - id (pk)
  - name
