import EmailCapture from "./email-capture";

export default function Footer() {
  return (
    <footer id="email-updates" className="mt-16 pt-8 border-t border-[rgba(30,27,22,0.08)]">
      <h3 className="font-display text-xl mb-3 text-center">Follow Along</h3>
      <div className="flex justify-center">
        <div className="w-full max-w-[520px]">
          <EmailCapture />
        </div>
      </div>
    </footer>
  );
}
