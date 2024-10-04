import Image from "next/image";

const profiles = [
  {
    name: 'Emily Johnson',
    role: 'Software Engineer',
    image: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'John Smith',
    role: 'UX Designer',
    image: 'https://i.pravatar.cc/150?img=2',
  },
  {
    name: 'Sara Lee',
    role: 'Product Manager',
    image: 'https://i.pravatar.cc/150?img=3',
  },
];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
// Replace the <main> with this
<main className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto my-12"> 
  {profiles.map((profile) => (
    <div key={profile.name} className="bg-white shadow-lg rounded-lg p-6 text-center">
      <img src={profile.image} alt={profile.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
      <h2 className="text-xl font-bold">{profile.name}</h2>
      <p className="text-gray-500">{profile.role}</p>
    </div>
  ))}
</main>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
