import Link from 'next/link';
import './Footer.css';
export default function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </footer>
  );
}