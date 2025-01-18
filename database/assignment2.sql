-- Select a single record
SELECT * FROM inventory WHERE inv_year = '2019';
-- Update a single record
UPDATE inventory SET inv_year = '2020' WHERE inv_year = '2019';
-- Delete a single record
DELETE FROM inventory WHERE inv_make = 'Jeep';

-- Modify the GM HUMMER--
UPDATE public.inventory
SET inv_description = REPLACE(inv_description, 'small interiors', 'a huge interior')
WHERE inv_make = 'GM' AND inv_model = 'HUMMER';

-- Update all records in the inventory table --
UPDATE public.inventory
SET inv_image = REPLACE(inv_image, '/images/', '/images/vehicles/'),
    inv_thumbnail = REPLACE(inv_thumbnail, '/images/', '/images/vehicles/');