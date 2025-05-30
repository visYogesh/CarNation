const vehicleData = [
  {
    // "id" : "1",
    title: "2008 Dodge Ram 3500",
    subtitle: "SLT Crew Cab",
    price_usd: 7123,
    mileage_miles: 380000,
    images: [
      "/images/sales/dr3.jpg",
      "/images/sales/dr1.jpg",
      "/images/sales/dr2.jpg",
      "/images/sales/dr4.jpg",
      "/images/sales/dr5.jpg",
      "/images/sales/dr7.jpg",
      "/images/sales/dr8.jpg",
      "/images/sales/dr9.jpg",
    ],
    dealership: {
      name: "CarNation Elite",
      address: "13610 Floyd Cir, Dallas, TX 75243",
      phone: "(214) 597-4922",
      email: "carnationautorepair@gmail.com",
    },
    contact_options: [
      "Call (214) 597-4922",
      "Message Us",
      "Get Approved",
      "Value My Trade",
      "Request More Photos",
      "Request Price",
      "Request Mileage",
      "Request VIN",
      "Ask About Specials",
      "Free Trade In Quote",
      "Apply For Financing",
      "Request Price Drop Alert",
      "Make an Offer",
    ],
    vehicle_info: {
      condition: "Used",
      engine: "Cummins 6.7L Diesel Turbo I6 350hp 610ft. lbs.",
      transmission: "5-Speed Automatic",
      drivetrain: "Rear Wheel Drive",
      trim: "SLT",
      max_seating: 6,
      fuel: "Diesel",
      exterior_color: "Brilliant Black Crystal Pearl Coat",
      interior_color: "Medium Slate Gray",
      vin: "3D7ML48A58G233513",
      seating_rows: 2,
      vehicle_type: "Truck",
      size: "Heavy Duty",
    },
    description:
      "The 2008 Dodge Ram 3500 SLT is a powerful and reliable pickup truck that is perfect for any job or adventure. This heavy-duty truck comes equipped with a spacious crew cab that can comfortably seat up to six passengers, making it ideal for both work and play.\n\nUnder the hood, you'll find a robust 6.7-liter Cummins Turbo Diesel engine that delivers impressive performance and towing capabilities. With its 350 horsepower and 650 lb-ft of torque, this truck can handle even the toughest tasks with ease.\n\nThe exterior of the 2008 Dodge Ram 3500 SLT is bold and rugged, with its iconic grille and chrome accents. The bed of the truck offers plenty of space for hauling, and features like clearance lights and a power sliding rear window add both style and function.",
    features: {
      "Air Conditioning": ["Front air conditioning", "Single-zone"],
      Airbags: ["Front airbags - dual"],
      "Audio System": [
        "Antenna type - mast",
        "In-Dash CD - single disc",
        "Radio - AM/FM",
        "Satellite radio - SiriusXM",
        "Total speakers - 4",
      ],
      Brakes: [
        "ABS - 4-wheel",
        "Electronic brakeforce distribution",
        'Front ventilated disc (13.9" diameter, 1.3" width)',
        'Rear disc (13.9" diameter, 1.2" width)',
      ],
      "Comfort Features": ["Carpet floor mats", "Rear floor mats"],
      "Convenience Features": [
        "Front console with storage",
        "Cruise control",
        "Rear cupholders",
        "Keyless entry remote",
        "One-touch driver window",
        "12V front power outlet",
        "Power steering",
        "Front reading lights",
        "Tilt steering wheel",
        "Under-seat storage",
        "Passenger vanity mirror",
      ],
      Drivetrain: ["Axle ratio - 4.10"],
      "Exterior Features": [
        "Chrome front bumper",
        "Chrome grille",
        "Pickup bed light",
        "Chrome rear bumper",
      ],
      Instrumentation: [
        "Clock",
        "Compass",
        "External temperature display",
        "Tachometer",
        "Powertrain hour meter",
        "Trip odometer",
        "Low fuel warning",
      ],
      Lights: ["Clearance lights", "Front fog lights"],
      Mirrors: ["Power side mirrors", "Heated side mirrors"],
      Safety: ["Child safety door locks", "Child seat anchors"],
      Seatbelts: [
        "Front center lap belt",
        "Rear center 3-point belt",
        "Front force limiters",
        "Front pretensioners",
      ],
      Seats: [
        "Adjustable front headrests",
        "40-20-40 split bench front seat",
        "One-piece folding rear bench",
        "Premium cloth upholstery",
      ],
      Security: ["Vehicle immobilizer", "Power door locks"],
      Suspension: [
        "Front shocks - gas",
        "Front springs - coil",
        "Independent front suspension (short & long arm)",
        "Rear shocks - gas",
        "Multi-leaf rear suspension",
        "Solid live axle",
      ],
      "Tires and Rims": [
        "Dual rear wheels",
        "Full-size spare underbody",
        "Spare wheel - steel",
        "LT all-season tires",
        'Steel wheels (17" x 6")',
      ],
      "Towing and Hauling": ["Trailer wiring"],
      Windows: [
        "Variable intermittent front wipers",
        "Power sliding rear window",
        "Power windows",
      ],
    },
    specifications: {
      "Engine Details": {
        Bore_inches: 4.21,
        Stroke_inches: 4.88,
        Displacement_liter: 6.7,
        Compression: 17.3,
        Oil_capacity_qt: 11.3,
        Cylinders: 6,
        Max_HP: 350,
        Max_HP_rpm: 3013,
        Max_Torque_ft_lb: 610,
        Max_Torque_rpm: 1400,
        Redline_rpm: 3500,
        Valves: 24,
        Aspiration: "Turbocharger",
        Block_Type: "Inline",
        Cam_Type: "OHV",
        Fuel_Induction: "DI",
        Fuel_Type: "Diesel",
      },
      Measurements: {
        Bed_Length_in: 98.3,
        Ground_Clearance_in: 7.6,
        Height_in: 75.1,
        Length_in: 249.7,
        Wheelbase_in: 160.5,
        Width_in: 96,
        Width_excl_mirrors_in: 96,
      },
      "Other Dimensions": {
        Front_Track_in: 68.6,
        Rear_Track_in: 75.8,
        Tank_Size_gal: 35,
        Spare_Tank_Size_gal: 0,
      },
      Performance: {
        Approach_Angle_deg: 16.9,
        Departure_Angle_deg: 24.6,
        Turning_Circle_ft: 52.5,
        Max_Payload_lbs: 4800,
        Max_Towing_Capacity_lbs: 15750,
        Towing_Capacity_lbs: 10650,
      },
      "Seating Dimensions": {
        Headroom_front_in: 41,
        Headroom_rear_in: 40,
        Hiproom_front_in: 65,
        Hiproom_rear_in: 65.3,
        Legroom_front_in: 41,
        Legroom_rear_in: 36.7,
        Shoulder_room_front_in: 67,
        Shoulder_room_rear_in: 66.5,
        Doors: 4,
        Standard_Seating: 6,
        Passenger_Volume_3rd_Row_cu_ft: 0,
      },
      Transmission: {
        Type: "Automatic",
        Name: "5-Speed Automatic",
        Gears: 5,
      },
      Weight: {
        Curb_Weight_lbs: 6200,
        Gross_Vehicle_Weight_Rating_lbs: 11000,
        Gross_Combined_Weight_Rating_lbs: 17000,
        Gross_Vehicle_Weight_Range_lbs: "10001-14000",
        Tonnage: 1,
      },
      Wheels_and_Tires: {
        Rear_Tire_Size: "LT235/80R17",
        Rear_Wheel_Diameter: "17 x 6",
        Tire_Type: "LT235/80R17",
        Wheel_Diameter: "17 x 6",
      },
      Awards: ["Intellichoice", "Vehix"],
      Safety_Equipment: [
        "ABS Four Wheel",
        "Airbags Front Driver",
        "Airbags Front Passenger",
        "Airbags Side Curtain (Optional)",
        "Daytime Running Lights (Optional)",
      ],
    },
  },
  {
    title: "1985 Chevrolet C/K 10 Series",
    subtitle: "C10 Regular Cab",
    price_usd: 15500,
    mileage_miles: 40000,
    images: [
      "/images/sales/ch1.jpg",
      "/images/sales/ch2.jpg",
      "/images/sales/ch3.jpg",
      "/images/sales/ch4.jpg",
      "/images/sales/ch5.jpg",
    ],
    dealership: {
      name: "CarNation Elite",
      address: "13610 Floyd Cir, Dallas, TX 75243",
      phone: "(214) 597-4922",
      email: "carnationautorepair@gmail.com",
    },
    contact_options: [
      "Call (214) 597-4922",
      "Message Us",
      "Get Approved",
      "Value My Trade",
      "Request More Photos",
      "Request Price",
      "Request Mileage",
      "Request VIN",
      "Ask About Specials",
      "Free Trade In Quote",
      "Apply For Financing",
      "Request Price Drop Alert",
      "Make an Offer",
    ],
    vehicle_info: {
      condition: "Used",
      trim: "C10",
      vin: "2GCDC14H2F1224575",
      engine: null,
      transmission: null,
    },
    description:
      "The 1985 Chevrolet C/K 10 Series C10 is a classic truck that exudes style and strength. This beauty features an iconic boxy design, perfect for those who appreciate a retro look. It is equipped with a powerful V8 engine that delivers impressive performance.\n\nStep inside the spacious and comfortable cabin, and you'll be greeted with a timeless interior that has been well-maintained over the years. The plush seats provide ample support and cushioning, ensuring a comfortable ride every time. With extra space in the back, you can easily store all your tools and equipment or even use it as a makeshift camping spot.",
    features: {},
    specifications: {},
  },
  {
    title: "2012 Toyota Camry",
    subtitle: "LE Sedan",
    generation: "5th (2012 - 2017)",
    price_usd: 10111,
    mileage_miles: 145000,
    images: [
      "/images/sales/ty2.jpg",
      "/images/sales/ty1.jpg",
      "/images/sales/ty3.jpg",
      "/images/sales/ty4.jpg",
      "/images/sales/ty5.jpg",
      "/images/sales/ty6.jpg",
      "/images/sales/ty7.jpg",
      "/images/sales/ty8.jpg",
      "/images/sales/ty9.jpg",
      "/images/sales/ty10.jpg",
      "/images/sales/ty11.jpg",
      "/images/sales/ty12.jpg",
    ],
    dealership: {
      name: "CarNation Elite",
      address: "13610 Floyd Cir, Dallas, TX 75243",
      phone: "(214) 597-4922",
      email: "carnationautorepair@gmail.com",
    },
    contact_options: [
      "Call (214) 597-4922",
      "Message Us",
      "Get Approved",
      "Value My Trade",
      "Request More Photos",
      "Request Price",
      "Request Mileage",
      "Request VIN",
      "Ask About Specials",
      "Free Trade In Quote",
      "Apply For Financing",
      "Request Price Drop Alert",
      "Make an Offer",
    ],
    vehicle_info: {
      condition: "Used",
      engine: "2.5L I4 178hp 170ft. lbs.",
      transmission: "6-Speed Shiftable Automatic",
      drivetrain: "Front Wheel Drive",
      trim: "LE",
      generation: "5th (2012 - 2017)",
      max_seating: 5,
      fuel: "Gasoline",
      exterior_color: "Attitude Black Metallic",
      interior_color: "Ivory",
      vin: "4T4BF1FK8CR193521",
      seating_rows: 2,
      vehicle_type: "Car",
      size: "Mid-Size",
      mpg_city: 25,
      mpg_highway: 35,
      max_range_miles: 595,
    },
    description:
      "The 2012 Toyota Camry is a top-rated sedan that offers both style and performance. Powered by a 2.5L I4 engine, this vehicle delivers an impressive 178 horsepower and 170 ft. lbs. of torque, making it perfect for both city driving and highway cruising. And with its 6-speed shiftable automatic transmission, you can easily switch between gears for a smooth and responsive drive.\n\nWith spacious seating and a sleek exterior design, the Camry is perfect for families, commuters, or anyone looking for a reliable and stylish ride. Don't miss your chance to own this 2012 Toyota Camry with extra spacing and experience the ultimate driving experience.",
    features: {
      "Air Conditioning": [
        "Air filtration",
        "Front air conditioning",
        "Front air conditioning zones - single",
      ],
      Airbags: [
        "Airbag deactivation - occupant sensing passenger",
        "Front airbags - dual",
        "Knee airbags - dual front",
        "Side airbags - front",
        "Side airbags - rear",
        "Side curtain airbags - front",
        "Side curtain airbags - rear",
      ],
      "Audio System": [
        "Antenna type - element",
        "Auxiliary audio input - iPod/iPhone",
        "Auxiliary audio input - jack",
        "Auxiliary audio input - USB",
        "In-Dash CD - MP3 Playback",
        "In-Dash CD - single disc",
        "Radio - AM/FM",
        "Radio data system",
        "Speed sensitive volume control",
        "Total speakers - 6",
      ],
      Brakes: [
        "ABS - 4-wheel",
        "Braking assist",
        "Electronic brakeforce distribution",
        'Front brake diameter - 11.7" ventilated disc',
        'Rear brake diameter - 11.1" disc',
      ],
      "Comfort Features": ["Armrests - rear folding"],
      "Convenience Features": [
        "Center console - front console with storage (illuminated)",
        "Cruise control",
        "Cupholders - front & rear",
        "Keyless entry & trunk release",
        "One-touch windows (driver)",
        "Overhead console - front",
        "Power outlets - two 12V",
        "Power steering",
        "Reading lights - front",
        "Steering wheel - tilt & telescopic with audio/cruise controls",
        "Storage - door pockets, front seatback, sunglasses holder",
        "Dual vanity mirrors",
      ],
      Drivetrain: ["Axle ratio - 3.63"],
      "Engine Features": ["Battery saver"],
      "Exterior Features": ["Body-color door handles & mirrors"],
      "In Car Entertainment": ["Infotainment screen size - 6.1 in."],
      Instrumentation: [
        "External temperature display",
        "Gauge - tachometer",
        "Multi-function display",
        "Warnings/reminders - low fuel & maintenance",
      ],
      Lights: ["Daytime running lights", "Headlights - auto on/off halogen"],
      Mirrors: ["Side mirror adjustments - manual folding & power"],
      Safety: [
        "Active head restraints - dual front",
        "Child safety door locks",
        "Child seat anchors - LATCH system",
        "Crumple zones - front & rear",
        "Emergency interior trunk release",
        "Safety brake pedal system",
      ],
      Seatbelts: [
        "Front & rear 3-point",
        "Force limiters & pretensioners front & rear",
      ],
      Seats: [
        "Driver seat manual adjustments - 6",
        "Passenger seat manual adjustments - 4",
        "Adjustable headrests front & rear",
        "Front bucket seats",
        "Rear 60/40 split bench",
        "Cloth upholstery",
      ],
      Security: [
        "Vehicle immobilizer",
        "Power door locks - anti-lockout & auto-locking",
      ],
      "Stability and Traction": ["Stability control", "Traction control"],
      Steering: ["Steering ratio - 14.8", "Turns lock-to-lock - 2.8"],
      Suspension: [
        "Front: gas shocks, coil springs, stabilizer bar, MacPherson struts",
        "Rear: gas shocks, coil springs, multi-link",
      ],
      Telematics: [
        "Hands-free phone call integration",
        "Wireless data link - Bluetooth",
      ],
      "Tires and Rims": [
        "Spare tire mount - inside (temporary steel)",
        "Tire Pressure Monitoring System",
        "All-season tires",
        "Steel wheels with full covers",
      ],
      Windows: [
        "Front wipers - variable intermittent",
        "Power windows with safety reverse",
        "Solar-tinted glass",
        "Rear window defogger",
      ],
    },
    fuel_economy: {
      city_mpg: 25,
      highway_mpg: 35,
    },
    engine_details: {
      bore_in: 3.54,
      stroke_in: 3.86,
      displacement_l: 2.5,
      compression: 10.4,
      oil_capacity_qt: 4.5,
      cylinders: 4,
      max_hp: 178,
      max_hp_rpm: 6000,
      max_torque_ft_lb: 170,
      max_torque_rpm: 4100,
      valves: 16,
      aspiration: "Naturally Aspirated",
      block_type: "Inline",
      cam_type: "DOHC",
      fuel_induction: "SMPI",
      fuel_quality_octane: 87,
      fuel_type: "Gasoline",
      valve_timing: "VVT-I",
    },
    standard_specifications: {
      interior_dimensions: {
        cargo_volume_cuft: 15.4,
      },
      measurements: {
        ground_clearance_in: 6.1,
        height_in: 57.9,
        length_in: 189.2,
        wheelbase_in: 109.3,
        width_in: 71.7,
        width_excl_mirrors_in: 71.7,
      },
      other_dimensions: {
        front_track_in: 62.4,
        rear_track_in: 62.0,
        tank_size_gal: 17,
        spare_tank_size_gal: 0,
      },
      performance: {
        aerodynamic_drag_coefficient: 0.28,
        turning_circle_ft: 36.7,
      },
      seating_dimensions: {
        headroom_front_in: 38.8,
        headroom_rear_in: 38.1,
        hiproom_front_in: 54.5,
        hiproom_rear_in: 54.5,
        legroom_front_in: 41.6,
        legroom_rear_in: 38.9,
        shoulder_room_front_in: 58.0,
        shoulder_room_rear_in: 56.6,
        doors: 4,
        standard_seating: 5,
        seating_rows: 2,
        passenger_volume_cuft: 102.7,
        passenger_volume_3rd_row_cuft: 0,
      },
      transmission: {
        gears: 6,
        name: "6-Speed Shiftable Automatic",
        type: "Automatic",
      },
      weight: {
        curb_weight_lbs: 3190,
      },
      wheels_and_tires: {
        rear_tire_size: "P205/65R16",
        wheel_diameter: "16 x 6.5",
      },
    },
    nhtsa_crash_test_ratings: {
      front_driver: null,
      front_overall: null,
      front_passenger: null,
      barrier_driver: null,
      barrier_overall: null,
      barrier_passenger: null,
      combined_front: null,
      combined_rear: null,
      side_overall: null,
      pole_driver: null,
    },
    awards: [
      { name: "Top 10 Sedans", source: "Autobytel" },
      { name: "Best Bet: Passenger Cars", source: "Cars.com" },
      { name: "Best Buy", source: "Consumer Guide Automotive" },
      { name: "Top 10 Best-Selling Vehicles", source: "Edmunds" },
      { name: "Top 15 Family Vehicles", source: "Edmunds" },
      { name: "Top Safety Pick - Midsize Cars", source: "IIHS" },
    ],
  },
];

export default vehicleData;
