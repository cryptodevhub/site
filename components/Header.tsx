import Link from 'next/link'
import { SearchIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, ChevronRightIcon, MenuIcon } from '@heroicons/react/solid'

export default function Header() {
  return (
    <div className="bg-base-100 shadow">
      <header className="max-w-7xl mx-auto navbar">
        <nav className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <MenuIcon className="h-5 w-5" />{' '}
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/category-1">
                  <a>Category 1</a>
                </Link>
              </li>
              <li tabIndex={0}>
                <Link href="/category-2">
                  <a className="justify-between">
                    Category 2
                    <ChevronRightIcon className="fill-current" width={20} height={20} />
                  </a>
                </Link>
                <ul className="rounded-box p-2 bg-base-100">
                  <li>
                    <Link href="/link-1">
                      <a>Link 1</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/link-2">
                      <a>Link 2</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/category-3">
                  <a>Category 3</a>
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/">
            <a className="btn btn-ghost normal-case text-xl">CryptoDevHub</a>
          </Link>
        </nav>
        <nav className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link href="/category-1">
                <a>Category 1</a>
              </Link>
            </li>
            <li tabIndex={0}>
              <Link href="/category-2">
                <a>
                  Category 2
                  <ChevronDownIcon className="fill-current" width={20} height={20} />
                </a>
              </Link>
              <ul className="rounded-box p-2 bg-base-100">
                <li>
                  <Link href="/link-1">
                    <a>Link 1</a>
                  </Link>
                </li>
                <li>
                  <Link href="/link-2">
                    <a>Link 2</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/category-3">
                <a>Category 3</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="navbar-end">
          <Link href="/search">
            <a className="btn btn-ghost btn-circle">
              <SearchIcon className="h-5 w-5" />{' '}
            </a>
          </Link>
        </div>
      </header>
    </div>
  )
}
