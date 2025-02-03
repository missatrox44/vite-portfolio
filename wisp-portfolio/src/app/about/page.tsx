// import { Footer } from "@/components/Footer";
// import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# About Me

![Octopus Trumpet Logo](images/pixar-sara.webp)

As a science-loving, code-wielding full-stack web developer, I create user-friendly apps with serious impact. My systematic problem-solving skills were fine-tuned at UT Austin's web development boot camp. I'm resourceful and always staying up to date with the latest trends.

But wait, there's more! I'm not just a coding maestro; I also play the trumpet! For two decades, I've performed with various groups across multiple genres, putting a smile on people's faces and a beat in their feet. Some of my heroes? Freddie Hubbard, Clifford Brown, Miles Davis, and Dizzy Gillespie. I've even shared my wisdom as a trumpet tutor, shaping the next generation of brass warriors.

When I'm not jamming or coding, I'm an outdoor enthusiast and bookworm extraordinaire. From hanging out in trees to diving into captivating reads, I seize every moment. My most epic adventures? [Trinity Alps Wilderness](https://www.fs.usda.gov/recarea/stnf/recarea/?recid=6521), [Rocky Mountain National Park](https://www.nps.gov/romo/index.htm), and [Arches National Park](https://www.nps.gov/arch/index.htm) --pure bliss!

Let's collab!`;

export async function generateMetadata() {
  return {
    title: "Sara Baqla",
    description: "Full Stack Developer",
    openGraph: {
      title: "Sara Baqla",
      description: "Full Stack Developer",
      images: [
        signOgImageUrl({
          title: "Sara Baqla",
          label: "Sara Baqla",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    // <div className="container mx-auto px-5">
    //   <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
    //   <Footer />
    // </div>
  );
};

export default Page;
