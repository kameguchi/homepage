import { headers } from "next/headers";
import { defaultTenant, tenants } from "../data/tenants";

export function normalizeHost(host) {
  if (!host) {
    return "";
  }

  return host.split(":")[0].toLowerCase();
}

export function resolveTenantByHost(host) {
  const normalizedHost = normalizeHost(host);
  const matched = tenants.find((tenant) =>
    tenant.hosts.some((tenantHost) => normalizeHost(tenantHost) === normalizedHost)
  );

  return matched || defaultTenant;
}

export async function getCurrentTenant() {
  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") || headerList.get("host") || "";
  return resolveTenantByHost(host);
}
