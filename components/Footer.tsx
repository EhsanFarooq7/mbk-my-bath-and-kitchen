export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6">
            <div className="container mx-auto px-4 text-center">
                <p>© {new Date().getFullYear()} MBK Remodel. All rights reserved.</p>
            </div>
        </footer>
    );
}
