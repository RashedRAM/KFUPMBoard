// ALl our data that will be inserted into the database is here

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

async function seedProducts() {
  try {

    await prisma.products.create({
      data: {
        id: 1,
        title: "Calculator",
        description: "A calculator for all your needs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta nec dolor at rhoncus. Praesent tincidunt finibus orci, in porttitor odio malesuada eu. Phasellus eget urna justo. Nam dui mauris, fermentum ut elit ac, fermentum venenatis nibh. Mauris nec convallis nulla. Vestibulum rhoncus varius nulla et laoreet. Nulla facilisi. Donec aliquet lorem non lectus volutpat, sed euismod metus pretium. Integer sit amet ante nibh. Phasellus sollicitudin, odio non tristique venenatis, est nunc auctor libero, et faucibus felis ante at sapien. Donec bibendum ut ligula rutrum imperdiet. Nunc consectetur mollis tortor, vel mattis felis venenatis et. Phasellus vehicula fringilla blandit ",
        building: 837,
        url:"https://picsum.photos/id/7",
        user_id: "6f76b82f-e3cb-40d4-9f6b-89d8101101db",
        number: "0556628599"
      },
    });

    await prisma.products.create({
      data: {
        id: 2,
        title: "English Books",
        description: "Oria Books",
        building: 837,
        url:"https://picsum.photos/id/4",
        user_id: "bb447bdf-7bd0-4843-986b-887669ac3db2",
        number: "0556628595"

      },
    });
    
} catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();