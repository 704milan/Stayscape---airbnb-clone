const testData = [
  {
    title: 'Flats in pune',
    description: 'Modern and affordable flats in Pune with prime locations and essential amenities.',
    image: {
      url: 'https://res.cloudinary.com/dks0r4r3o/image/upload/v1765168983/f093bde0-bac5-40fc-820b-f8eb1e926b22_bhxoxd.jpg',
      filename: 'Flats in pune'
    },
    price: 11000,
    location: 'Pune, Maharashtra',
    country: 'India',
    owner: '6909b73fe8bf8664dce07f74'
  },
  {
    title: 'Luxury Beach Villa', 
    description: 'Beautiful beachside villa with ocean views.',   
    image: {
      url: 'https://res.cloudinary.com/dks0r4r3o/image/upload/v1765169079/6973ded6-1a4e-43f6-acf6-6ed554ec46aa_ziepn6.jpg',
      filename: 'Luxury Beach Villa'
    },
    price: 10000,
    location: 'Goa',
    country: 'India',
    owner: '6909b73fe8bf8664dce07f74'
  },
  {
    title: 'Apartment In Siolim',
    description: 'Stylish apartment in Siolim with modern amenities for a relaxing stay.',
    image: {
      url: 'https://res.cloudinary.com/dks0r4r3o/image/upload/v1765169161/c1d81972-c299-4ce3-bf3f-89cf846c1f00_b6etkc.jpg',
      filename: 'Apartment In Siolim'
    },
    price: 15300,
    location: 'Siolim, Goa',     
    country: 'India',
    owner: '6909b73fe8bf8664dce07f74'
  },
  {
    title: 'Apartment In Udaypur',
    description: 'Elegant apartment in Udaypur offering comfort and scenic surroundings.',
    image: {
      url: 'https://res.cloudinary.com/dks0r4r3o/image/upload/v1765169673/920fea8e-de5d-44d1-bace-adff53a3a6c7_ob6vx7.jpg',
      filename: 'Apartment In Udaypur'
    },
    price: 17600,
    location: 'Udaypur, Rajasthan',
    country: 'India',
    owner: '6909b73fe8bf8664dce07f74'
  },
  {
    title: 'Apartment In Adhana',
    description: 'Peaceful apartment in Adhana ideal for a quiet and cozy stay.',
    image: {
      url: 'https://res.cloudinary.com/dks0r4r3o/image/upload/v1765169696/9a300954-a774-4895-a0ff-c79cb88594c6_adiiss.jpg',
      filename: 'Apartment In Adhana'
    },
    price: 13400,
    location: 'Adhana',
    country: 'India',
    owner: '6909b73fe8bf8664dce07f74'
  },
  {
    title: 'Flat In Banglore',   
    description: 'Modern flat in Bangalore with easy access to major attractions.',
    image: {
      url: 'https://res.cloudinary.com/dks0r4r3o/image/upload/v1765169729/8a051cec-ed5e-4973-93a2-1bffd54aeb0b_tmvcxi.jpg',
      filename: 'Flat In Banglore'
    },
    price: 16500,
    location: 'Bangalore, Karnataka',
    country: 'India',
    owner: '6909b73fe8bf8664dce07f74'
  },
  {
    title: 'Flat In Downtown Dubai',
    description: 'Luxury flat in Downtown Dubai with stunning skyline views.',
    image: {
      url: 'https://res.cloudinary.com/dks0r4r3o/image/upload/v1765182482/a755ba31-8755-44d4-b7de-95685942b70d_tf8rzk.jpg',
      filename: 'Flat In Downtown Dubai'
    },
    price: 19800,
    location: 'Downtown Dubai',  
    country: 'UAE',
    owner: '6909b73fe8bf8664dce07f74'
  },
  {
    title: 'Home In Nashik',     
    description: 'Comfortable home in Nashik surrounded by greenery and vineyards.',
    image: {
      url: 'https://res.cloudinary.com/dks0r4r3o/image/upload/v1765169791/73e5b2d1-6c6f-4a9c-a9c0-79f266c6a8e5_j3la5r.jpg',
      filename: 'Home In Nashik' 
    },
    price: 11200,
    location: 'Nashik, Maharashtra',
    country: 'India',
    owner: '6909b73fe8bf8664dce07f74'
  },
  {
    title: 'Cabin In Lonawala',  
    description: 'Rustic cabin in Lonavala perfect for a peaceful getaway.',
    image: {
      url: 'https://res.cloudinary.com/dks0r4r3o/image/upload/v1765169813/f54eb11e-bc5d-48a4-985a-d5caff7af0b6_t9whii.jpg',
      filename: 'Cabin In Lonawala'
    },
    price: 14800,
    location: 'Lonavala, Maharashtra',
    country: 'India',
    owner: '6909b73fe8bf8664dce07f74'
  },
  {
    title: 'Home In Guwahati',   
    description: 'Spacious home in Guwahati with a cozy atmosphere.',
    image: {
      url: 'https://res.cloudinary.com/dks0r4r3o/image/upload/v1765169845/23f6cc5d-a07c-40ae-b7b7-fc5a478499e5_dmowrl.jpg',
      filename: 'Home In Guwahati'
    },
    price: 12300,
    location: 'Guwahati, Assam', 
    country: 'India',
    owner: '6909b73fe8bf8664dce07f74'
  },
  {
    title: 'Flat In banipark',   
    description: 'Affordable flat in Surat with all essential facilities.',
    image: {
      url: 'https://res.cloudinary.com/dks0r4r3o/image/upload/v1765169887/0eb4b14a-67cf-44bc-9a82-1ad283ba4d4a_vvh7pm.jpg',
      filename: 'Flat In banipark'
    },
    price: 11900,
    location: 'Surat, Gujarat',  
    country: 'India',
    owner: '6909b73fe8bf8664dce07f74'
  },
  {
    title: 'Flat In Delhi',      
    description: 'Convenient flat in Delhi close to major landmarks and markets.',
    image: {
      url: 'https://res.cloudinary.com/dks0r4r3o/image/upload/v1765169912/036c18e2-f1cf-44f5-9d1a-da350a0d764b_lo47na.jpg',
      filename: 'Flat In Delhi'  
    },
    price: 14200,
    location: 'Delhi',
    country: 'India',
    owner: '6909b73fe8bf8664dce07f74'
  },
  {
    title: 'Home In North Goa',  
    description: 'Charming home in North Goa near beaches and nightlife spots.',
    image: {
      url: 'https://res.cloudinary.com/dks0r4r3o/image/upload/v1765169940/dfcc8d26-ffd1-474a-96d1-eb617f34523e_evk1ap.jpg',
      filename: 'Home In North Goa'
    },
    price: 15900,
    location: 'North Goa',       
    country: 'India',
    owner: '6909b73fe8bf8664dce07f74'
  },
  {
    title: 'Room In Mukteshwar', 
    description: 'Cozy room in Mukteshwar with mountain views and fresh air.',
    image: {
      url: 'https://res.cloudinary.com/dks0r4r3o/image/upload/v1765169977/69b5b5d5-12d3-4259-ad12-bf49713a9290_t2qkfw.jpg',
      filename: 'Room In Mukteshwar'
    },
    price: 10100,
    location: 'Mukteshwar, Uttarakhand',
    country: 'India',
    owner: '6909b73fe8bf8664dce07f74'
  },
  {
    title: 'Flat In Phakanong',  
    description: 'Modern flat in Phakanong offering city convenience and style.',
    image: {
      url: 'https://res.cloudinary.com/dks0r4r3o/image/upload/v1765170002/b31f17f2-315a-47eb-8679-0c682f374900_qhcxuc.jpg',
      filename: 'Flat In Phakanong'
    },
    price: 17800,
    location: 'Phakanong, Bangkok',
    country: 'Thailand',
    owner: '6909b73fe8bf8664dce07f74'
  },
  {
    title: 'Room In Chikmanglur',
    description: 'Serene room in Chikmagalur surrounded by lush coffee estates.',
    image: {
      url: 'https://res.cloudinary.com/dks0r4r3o/image/upload/v1765170031/6d82dc1b-bde1-4aaa-83c6-6a3bade1f8ac_seay8u.jpg',
      filename: 'Room In Chikmanglur'
    },
    price: 9500,
    location: 'Chikmagalur, Karnataka',
    country: 'India',
    owner: '6909b73fe8bf8664dce07f74'
  },
  {
    title: 'Flat In Hoian',      
    description: 'Charming flat in Hoi An with traditional vibes and comfort.',
    image: {
      url: 'https://res.cloudinary.com/dks0r4r3o/image/upload/v1765170061/d6df3fac-e401-446a-93f1-49011692aed9_k6p0a6.jpg',
      filename: 'Flat In Hoian'  
    },
    price: 16400,
    location: 'Hoi An',
    country: 'Vietnam',
    owner: '6909b73fe8bf8664dce07f74'
  },
  {
    title: 'Room In Edinburg',   
    description: 'Compact room in Edinburgh offering comfort and convenience.',
    image: {
      url: 'https://res.cloudinary.com/dks0r4r3o/image/upload/v1765170090/6d9d980c-7013-45c5-a2e3-bd1675fdf3f4_b5obsy.jpg',
      filename: 'Room In Edinburg'
    },
    price: 19000,
    location: 'Edinburgh',       
    country: 'Scotland',
    owner: '6909b73fe8bf8664dce07f74'
  },
  {
    title: 'Flat In Florence',   
    description: 'Beautiful flat in Florence close to art and historic landmarks.',
    image: {
      url: 'https://res.cloudinary.com/dks0r4r3o/image/upload/v1765170118/1437b33a-5695-407b-af12-fc402dc68bfd_iidckd.jpg',
      filename: 'Flat In Florence'
    },
    price: 17200,
    location: 'Florence',        
    country: 'Italy',
    owner: '6909b73fe8bf8664dce07f74'
  },
  {
    title: 'Flat In Grindelwald',
    description: 'Cozy flat in Grindelwald with breathtaking Alpine views.',
    image: {
      url: 'https://res.cloudinary.com/dks0r4r3o/image/upload/v1765170163/15c11cd0-c484-4046-8c25-1eb6679c2d33_a8u1nz.jpg',
      filename: 'Flat In Grindelwald'
    },
    price: 20000,
    location: 'Grindelwald',     
    country: 'Switzerland',      
    owner: '6909b73fe8bf8664dce07f74'
  },
  {
    title: 'Flat In Hyderabad',  
    description: 'Spacious flat in Hyderabad with modern interiors and city views.',
    image: {
      url: 'https://res.cloudinary.com/dks0r4r3o/image/upload/v1765170195/adcca1a8-97bb-44c1-8158-467abfea41a5_pneptd.jpg',
      filename: 'Flat In Hyderabad'
    },
    price: 13800,
    location: 'Hyderabad, Telangana',
    country: 'India',
    owner: '6909b73fe8bf8664dce07f74'
  },
  {
    title: 'Apartment In Indore',
    description: 'Elegant apartment in Indore with modern comfort and convenience.',
    image: {
      url: 'https://res.cloudinary.com/dks0r4r3o/image/upload/v1765170238/964039c8-733c-4c07-8faa-cbdd375cadb6_eiwnp7.jpg',
      filename: 'Apartment In Indore'
    },
    price: 12000,
    location: 'Indore, Madhya Pradesh',
    country: 'India',
    owner: '6909b73fe8bf8664dce07f74'
  },
  {
    title: 'Flat In Mehdipatnam',
    description: 'Budget-friendly flat in Mehdipatnam with essential facilities.',
    image: {
      url: 'https://res.cloudinary.com/dks0r4r3o/image/upload/v1765170269/55a46d5e-6b73-4f23-89d9-f7f9dd90389c_thmd1v.jpg',
      filename: 'Flat In Mehdipatnam'
    },
    price: 10900,
    location: 'Mehdipatnam, Hyderabad',
    country: 'India',
    owner: '6909b73fe8bf8664dce07f74'
  },
  {
    title: 'Flat In Ejipura',    
    description: 'Comfortable flat in Ejipura close to city attractions.',
    image: {
      url: 'https://res.cloudinary.com/dks0r4r3o/image/upload/v1765170296/d91ee3af-2a84-4122-9380-3f03ddbc7699_xvszsi.jpg',
      filename: 'Flat In Ejipura'
    },
    price: 9900,
    location: 'Ejipura, Bangalore',
    country: 'India',
    owner: '6909b73fe8bf8664dce07f74'
  }
]
module.exports = testData;