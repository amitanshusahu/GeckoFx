import { Link } from "@tanstack/react-router";
import { cn } from "../../../lib/utils";

export default function SideBar() {

  const isActive = (path: string) => {
    return window.location.pathname === path;
  }

  return (
    <aside className="h-fit flex flex-col gap-8">

      <div className="pt-8">
        <div className="flex gap-1 items-center">
          <h3 className="text-md font-semibold">Infrastructure</h3>
          <span className="text-neutral-500 text-sm">(10)</span>
        </div>
        <div className="pt-2 flex flex-col gap-1">
          <Link
            to="/docs/server-rack"
            className={cn(
              "text-sm",
              {
                "text-gray-400": !isActive("/docs/server-rack"),
                "text-primary": isActive("/docs/server-rack"),
              }
            )}
          >
            Server Rack
          </Link>
        </div>
      </div>

      <div className="pt-8">
        <div className="flex gap-1 items-center">
          <h3 className="text-md font-semibold">Hardware</h3>
          <span className="text-neutral-500 text-sm">(10)</span>
        </div>
        <div className="pt-2 flex flex-col gap-1">
          <Link
            to="/docs/server-rack"
            className={cn(
              "text-sm",
              {
                "text-gray-400": !isActive("/docs/server-rack"),
                "text-primary": isActive("/docs/server-rack"),
              }
            )}
          >
            Server Rack
          </Link>
          <Link
            to="/docs/server-rack"
            className={cn(
              "text-sm",
              {
                "text-gray-400": !isActive("/docs/server-rack"),
                "text-primary": isActive("/docs/server-rack"),
              }
            )}
          >
            Server Rack
          </Link>
          <Link
            to="/docs/server-rack"
            className={cn(
              "text-sm",
              {
                "text-gray-400": !isActive("/docs/server-rack"),
                "text-primary": isActive("/docs/server-rack"),
              }
            )}
          >
            Server Rack
          </Link>
        </div>
      </div>

      <div className="pt-8">
        <div className="flex gap-1 items-center">
          <h3 className="text-md font-semibold">Hardware</h3>
          <span className="text-neutral-500 text-sm">(10)</span>
        </div>
        <div className="pt-2 flex flex-col gap-1">
          <Link
            to="/docs/server-rack"
            className={cn(
              "text-sm",
              {
                "text-gray-400": !isActive("/docs/server-rack"),
                "text-primary": isActive("/docs/server-rack"),
              }
            )}
          >
            Server Rack
          </Link>
          <Link
            to="/docs/server-rack"
            className={cn(
              "text-sm",
              {
                "text-gray-400": !isActive("/docs/server-rack"),
                "text-primary": isActive("/docs/server-rack"),
              }
            )}
          >
            Server Rack
          </Link>
          <Link
            to="/docs/server-rack"
            className={cn(
              "text-sm",
              {
                "text-gray-400": !isActive("/docs/server-rack"),
                "text-primary": isActive("/docs/server-rack"),
              }
            )}
          >
            Server Rack
          </Link>
          <Link
            to="/docs/server-rack"
            className={cn(
              "text-sm",
              {
                "text-gray-400": !isActive("/docs/server-rack"),
                "text-primary": isActive("/docs/server-rack"),
              }
            )}
          >
            Server Rack
          </Link>
          <Link
            to="/docs/server-rack"
            className={cn(
              "text-sm",
              {
                "text-gray-400": !isActive("/docs/server-rack"),
                "text-primary": isActive("/docs/server-rack"),
              }
            )}
          >
            Server Rack
          </Link>
        </div>
      </div>

    </aside>
  )
}