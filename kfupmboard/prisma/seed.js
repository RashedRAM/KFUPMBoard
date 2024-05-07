const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

async function seedProducts() {
  try {

    await prisma.products.create({
      data: {
        id: 1,
        title: "Calulator",
        description: "A calculator for all your needs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta nec dolor at rhoncus. Praesent tincidunt finibus orci, in porttitor odio malesuada eu. Phasellus eget urna justo. Nam dui mauris, fermentum ut elit ac, fermentum venenatis nibh. Mauris nec convallis nulla. Vestibulum rhoncus varius nulla et laoreet. Nulla facilisi. Donec aliquet lorem non lectus volutpat, sed euismod metus pretium. Integer sit amet ante nibh. Phasellus sollicitudin, odio non tristique venenatis, est nunc auctor libero, et faucibus felis ante at sapien. Donec bibendum ut ligula rutrum imperdiet. Nunc consectetur mollis tortor, vel mattis felis venenatis et. Phasellus vehicula fringilla blandit ",
        building: 837,
        url:"https://picsum.photos/id/7"
      },
    });

    await prisma.products.create({
      data: {
        id: 2,
        title: "English Books",
        description: "Oria Books",
        building: 837,
        url:"https://picsum.photos/id/4"
      },
    });
} catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();