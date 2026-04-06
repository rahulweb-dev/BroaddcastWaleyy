import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">BC</span>
              </div>
              <span className="text-xl font-bold">Broaddcast</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner in finding the perfect car. Compare, research, and buy with confidence.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cars" className="text-gray-400 hover:text-white">
                  New Cars
                </Link>
              </li>
              <li>
                <Link href="/cars" className="text-gray-400 hover:text-white">
                  Used Cars
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-gray-400 hover:text-white">
                  Compare Cars
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-white">
                  Car News
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-400 hover:text-white">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Brands</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cars?brand=maruti" className="text-gray-400 hover:text-white">
                  Maruti Suzuki
                </Link>
              </li>
              <li>
                <Link href="/cars?brand=hyundai" className="text-gray-400 hover:text-white">
                  Hyundai
                </Link>
              </li>
              <li>
                <Link href="/cars?brand=tata" className="text-gray-400 hover:text-white">
                  Tata
                </Link>
              </li>
              <li>
                <Link href="/cars?brand=mahindra" className="text-gray-400 hover:text-white">
                  Mahindra
                </Link>
              </li>
              <li>
                <Link href="/cars?brand=honda" className="text-gray-400 hover:text-white">
                  Honda
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-red-600" />
                <span className="text-gray-400">+91 1800-123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-red-600" />
                <span className="text-gray-400">support@broaddcast.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-red-600" />
                <span className="text-gray-400">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 broaddcast. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}
