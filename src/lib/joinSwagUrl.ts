/** eSoft Planner registration / login */
export const JOIN_SWAG_URL = "https://swag.myesoftplanner.com/auth/login";

export function isExternalHref(href: string): boolean {
  return /^https?:\/\//i.test(href);
}
