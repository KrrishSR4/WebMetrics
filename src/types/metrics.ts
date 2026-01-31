export interface WebsiteMetrics {
  url: string;
  timestamp: string;
  status: 'up' | 'down' | 'degraded' | 'pending';
  httpStatusCode: number | null;
  responseTime: number | null;
  averageResponseTime: number | null;
  ttfb: number | null;
  dnsLookupTime: number | null;
  tcpConnectTime: number | null;
  tlsHandshakeTime: number | null;
  sslCertificate: {
    valid: boolean;
    expiryDate: string | null;
    daysUntilExpiry: number | null;
    issuer: string | null;
  } | null;
  performanceScore: number | null;
  uptime24h: number | null;
  errorRate: number | null;
  coreWebVitals: {
    lcp: number | null;
    fid: number | null;
    cls: number | null;
  } | null;
  mobileScore: number | null;
  desktopScore: number | null;
  accessibilityScore: number | null;
  bestPracticesScore: number | null;
  responseTimeHistory: Array<{
    timestamp: string;
    value: number;
  }>;
  performanceBreakdown: {
    dns: number | null;
    connect: number | null;
    ttfb: number | null;
    download: number | null;
  } | null;
}

export interface SEOMetrics {
  score: number | null;
  titleTag: {
    present: boolean;
    length: number | null;
    content: string | null;
  };
  metaDescription: {
    present: boolean;
    length: number | null;
    content: string | null;
  };
  headings: {
    h1Count: number;
    h2Count: number;
    hasProperStructure: boolean;
  };
  images: {
    total: number;
    withAlt: number;
    missingAlt: number;
  };
  canonicalTag: boolean;
  robotsTxt: boolean;
  sitemap: boolean;
  mobileFriendly: boolean;
  indexable: boolean;
  issues: string[];
  recommendations: string[];
}

export interface MonitoringResult {
  website: WebsiteMetrics;
  seo: SEOMetrics;
  lastChecked: string;
  isMonitoring: boolean;
}
