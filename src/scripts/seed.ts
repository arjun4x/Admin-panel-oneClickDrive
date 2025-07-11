import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import path from 'path';

const dbPath = path.resolve(process.cwd(), 'carlistings.db');

const listings = [
  {
    id: "1",
    title: "2020 Toyota Corolla",
    description: "A reliable sedan with great fuel economy.",
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    pricePerDay: 45,
    location: "San Francisco, CA",
    imageUrl: "/images/cars/corolla.jpg",
    status: "Pending"
  },
  {
    id: "2",
    title: "2021 Ford Mustang",
    description: "A powerful sports car for your weekend getaway.",
    make: "Ford",
    model: "Mustang",
    year: 2021,
    pricePerDay: 120,
    location: "Los Angeles, CA",
    imageUrl: "/images/cars/mustang.jpg",
    status: "Pending"
  },
  {
    id: "3",
    title: "2019 Honda Civic",
    description: "Comfortable and efficient compact car.",
    make: "Honda",
    model: "Civic",
    year: 2019,
    pricePerDay: 40,
    location: "New York, NY",
    imageUrl: "/images/cars/civic.jpg",
    status: "Pending"
  },
  {
    id: "4",
    title: "2022 Tesla Model 3",
    description: "Electric vehicle with autopilot features.",
    make: "Tesla",
    model: "Model 3",
    year: 2022,
    pricePerDay: 90,
    location: "Austin, TX",
    imageUrl: "/images/cars/tesla-model3.jpg",
    status: "Pending"
  },
  {
    id: "5",
    title: "2018 Jeep Wrangler",
    description: "Off-road capable SUV with removable roof.",
    make: "Jeep",
    model: "Wrangler",
    year: 2018,
    pricePerDay: 85,
    location: "Denver, CO",
    imageUrl: "/images/cars/wrangler.jpg",
    status: "Pending"
  },
  {
    id: "6",
    title: "2020 BMW 3 Series",
    description: "Luxury sedan with sporty handling.",
    make: "BMW",
    model: "3 Series",
    year: 2020,
    pricePerDay: 95,
    location: "Miami, FL",
    imageUrl: "/images/cars/bmw-3series.jpg",
    status: "Pending"
  },
  {
    id: "7",
    title: "2017 Audi A4",
    description: "Premium compact executive car.",
    make: "Audi",
    model: "A4",
    year: 2017,
    pricePerDay: 75,
    location: "Chicago, IL",
    imageUrl: "/images/cars/audi-a4.jpg",
    status: "Pending"
  },
  {
    id: "8",
    title: "2021 Subaru Outback",
    description: "All-wheel drive adventure wagon.",
    make: "Subaru",
    model: "Outback",
    year: 2021,
    pricePerDay: 65,
    location: "Seattle, WA",
    imageUrl: "/images/cars/outback.jpg",
    status: "Pending"
  },
  {
    id: "9",
    title: "2019 Mercedes-Benz C-Class",
    description: "Elegant luxury compact executive car.",
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2019,
    pricePerDay: 110,
    location: "Dallas, TX",
    imageUrl: "/images/cars/mercedes-cclass.jpg",
    status: "Pending"
  },
  {
    id: "10",
    title: "2020 Chevrolet Silverado",
    description: "Full-size pickup truck with towing package.",
    make: "Chevrolet",
    model: "Silverado",
    year: 2020,
    pricePerDay: 100,
    location: "Houston, TX",
    imageUrl: "/images/cars/silverado.jpg",
    status: "Pending"
  },
  {
    id: "11",
    title: "2018 Volkswagen Golf",
    description: "Compact hatchback with great handling.",
    make: "Volkswagen",
    model: "Golf",
    year: 2018,
    pricePerDay: 50,
    location: "Portland, OR",
    imageUrl: "/images/cars/golf.jpg",
    status: "Pending"
  },
  {
    id: "12",
    title: "2021 Hyundai Tucson",
    description: "Compact SUV with modern tech features.",
    make: "Hyundai",
    model: "Tucson",
    year: 2021,
    pricePerDay: 60,
    location: "Phoenix, AZ",
    imageUrl: "/images/cars/tucson.jpg",
    status: "Pending"
  },
  {
    id: "13",
    title: "2019 Lexus RX 350",
    description: "Luxury midsize crossover SUV.",
    make: "Lexus",
    model: "RX 350",
    year: 2019,
    pricePerDay: 105,
    location: "Atlanta, GA",
    imageUrl: "/images/cars/lexus-rx350.jpg",
    status: "Pending"
  },
  {
    id: "14",
    title: "2020 Nissan Rogue",
    description: "Popular compact crossover SUV.",
    make: "Nissan",
    model: "Rogue",
    year: 2020,
    pricePerDay: 55,
    location: "Boston, MA",
    imageUrl: "/images/cars/rogue.jpg",
    status: "Pending"
  },
  {
    id: "15",
    title: "2017 Toyota Tacoma",
    description: "Mid-size pickup truck with off-road capability.",
    make: "Toyota",
    model: "Tacoma",
    year: 2017,
    pricePerDay: 80,
    location: "Salt Lake City, UT",
    imageUrl: "/images/cars/tacoma.jpg",
    status: "Pending"
  },
  {
    id: "16",
    title: "2022 Kia Telluride",
    description: "Three-row midsize SUV with premium features.",
    make: "Kia",
    model: "Telluride",
    year: 2022,
    pricePerDay: 85,
    location: "Orlando, FL",
    imageUrl: "/images/cars/telluride.jpg",
    status: "Pending"
  },
  {
    id: "17",
    title: "2018 Ford F-150",
    description: "Best-selling full-size pickup truck.",
    make: "Ford",
    model: "F-150",
    year: 2018,
    pricePerDay: 90,
    location: "Detroit, MI",
    imageUrl: "/images/cars/f150.jpg",
    status: "Pending"
  },
  {
    id: "18",
    title: "2021 Honda Accord",
    description: "Reliable midsize sedan with spacious interior.",
    make: "Honda",
    model: "Accord",
    year: 2021,
    pricePerDay: 60,
    location: "Philadelphia, PA",
    imageUrl: "/images/cars/accord.jpg",
    status: "Pending"
  },
  {
    id: "19",
    title: "2019 Mazda CX-5",
    description: "Sporty compact crossover with premium feel.",
    make: "Mazda",
    model: "CX-5",
    year: 2019,
    pricePerDay: 65,
    location: "San Diego, CA",
    imageUrl: "/images/cars/cx5.jpg",
    status: "Pending"
  },
  {
    id: "20",
    title: "2020 Volvo XC60",
    description: "Luxury compact SUV with safety features.",
    make: "Volvo",
    model: "XC60",
    year: 2020,
    pricePerDay: 95,
    location: "Minneapolis, MN",
    imageUrl: "/images/cars/xc60.jpg",
    status: "Pending"
  },
  {
    id: "21",
    title: "2022 Rivian R1T",
    description: "All-electric adventure truck with impressive off-road capability.",
    make: "Rivian",
    model: "R1T",
    year: 2022,
    pricePerDay: 180,
    location: "Denver, CO",
    imageUrl: "/images/cars/rivian-r1t.jpg",
    status: "Pending"
  },
  {
    id: "22",
    title: "2019 Porsche 911 Carrera",
    description: "Iconic sports car with precision handling.",
    make: "Porsche",
    model: "911 Carrera",
    year: 2019,
    pricePerDay: 250,
    location: "Miami, FL",
    imageUrl: "/images/cars/porsche-911.jpg",
    status: "Pending"
  },
  {
    id: "23",
    title: "2021 Land Rover Defender",
    description: "Legendary off-road SUV with modern comforts.",
    make: "Land Rover",
    model: "Defender",
    year: 2021,
    pricePerDay: 150,
    location: "Salt Lake City, UT",
    imageUrl: "/images/cars/defender.jpg",
    status: "Pending"
  },
  {
    id: "24",
    title: "2018 Dodge Challenger SRT",
    description: "Muscle car with aggressive styling and power.",
    make: "Dodge",
    model: "Challenger SRT",
    year: 2018,
    pricePerDay: 130,
    location: "Detroit, MI",
    imageUrl: "/images/cars/challenger.jpg",
    status: "Pending"
  },
  {
    id: "25",
    title: "2020 Jaguar F-Type",
    description: "British luxury sports car with elegant design.",
    make: "Jaguar",
    model: "F-Type",
    year: 2020,
    pricePerDay: 175,
    location: "New York, NY",
    imageUrl: "/images/cars/jaguar-ftype.jpg",
    status: "Pending"
  },
  {
    id: "26",
    title: "2022 Lucid Air",
    description: "Premium electric sedan with exceptional range.",
    make: "Lucid",
    model: "Air",
    year: 2022,
    pricePerDay: 220,
    location: "San Francisco, CA",
    imageUrl: "/images/cars/lucid-air.jpg",
    status: "Pending"
  },
  {
    id: "27",
    title: "2017 Alfa Romeo Giulia",
    description: "Italian sports sedan with passionate performance.",
    make: "Alfa Romeo",
    model: "Giulia",
    year: 2017,
    pricePerDay: 125,
    location: "Chicago, IL",
    imageUrl: "/images/cars/giulia.jpg",
    status: "Pending"
  },
  {
    id: "28",
    title: "2021 Genesis G80",
    description: "Luxury sedan with exceptional value.",
    make: "Genesis",
    model: "G80",
    year: 2021,
    pricePerDay: 110,
    location: "Dallas, TX",
    imageUrl: "/images/cars/genesis-g80.jpg",
    status: "Pending"
  },
  {
    id: "29",
    title: "2019 Mini Cooper S",
    description: "Compact car with go-kart-like handling.",
    make: "Mini",
    model: "Cooper S",
    year: 2019,
    pricePerDay: 75,
    location: "Boston, MA",
    imageUrl: "/images/cars/mini-cooper.jpg",
    status: "Pending"
  },
  {
    id: "30",
    title: "2020 Maserati Levante",
    description: "Italian luxury SUV with sporty character.",
    make: "Maserati",
    model: "Levante",
    year: 2020,
    pricePerDay: 200,
    location: "Los Angeles, CA",
    imageUrl: "/images/cars/levante.jpg",
    status: "Pending"
  }
];


async function seed() {
  const db = await open({
    filename: dbPath,
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS listings (
      id TEXT PRIMARY KEY,
      title TEXT,
      description TEXT,
      make TEXT,
      model TEXT,
      year INTEGER,
      pricePerDay REAL,
      location TEXT,
      imageUrl TEXT,
      status TEXT
    );
  `);

  const insert = `
    INSERT OR REPLACE INTO listings 
    (id, title, description, make, model, year, pricePerDay, location, imageUrl,status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?)
  `;

  for (const l of listings) {
    await db.run(insert, [
      l.id,
      l.title,
      l.description,
      l.make,
      l.model,
      l.year,
      l.pricePerDay,
      l.location,
      l.imageUrl,
      l.status,
    ]);
  }

  console.log(' Seeded DB with listings');
}

seed().catch((err) => {
  console.error('Failed to seed DB:', err);
});
