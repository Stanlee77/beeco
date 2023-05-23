import Navbar from "../Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <main>{children}</main>
      <Navbar />
    </section>
  );
}
