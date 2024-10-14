import ReactGA4 from "react-ga4";
const InitializeGoogleAnalytics = () => {
  ReactGA4.initialize("GTM-NBMB3DLT");
};

const TrackGoogleAnalyticsEvent = (
  category: string,
  action: string,
  label: string
) => {
  // Send GA4 Event
  ReactGA4.event({
    category: category,
    action: action,
    label: label,
  });
};

const TrackingFormLead = (
  category: string,
  action: string,
  label: string
  // form: z.infer<typeof FormSchema>
) => {
  // Send GA4 Event
  ReactGA4.event({
    category: category,
    action: action,
    label: label,
  });
};

export default InitializeGoogleAnalytics;
export {
  InitializeGoogleAnalytics,
  TrackGoogleAnalyticsEvent,
  TrackingFormLead,
};
