import CaseStudyLayout from "@/components/CaseStudy/CaseStudyLayout";

const problems = [
  {
    number: "01",
    title: "Designing an asynchronous document-processing workflow",
    problem:
      "Textract does not return the completed analysis immediately. The application needs to start an external job, let the user move to a persistent analysis page, and continue tracking progress without exposing AWS-specific identifiers to the frontend.",
    solution:
      "The backend starts the Textract job and stores its JobId alongside an application-owned analysis ID. The frontend polls using only the internal ID; each request lets the backend resolve the corresponding external job, check its status, and persist the result once processing completes.",
  },
  {
    number: "02",
    title: "Partial failures could leave orphaned uploads",
    problem:
      "Uploading an invoice crosses several independent systems. If the S3 upload succeeds but starting Textract or creating the database record fails, the stored object can be left without a usable analysis record.",
    solution:
      "The backend keeps the uploaded S3 location during the request and performs compensating cleanup in the failure path. If a later setup step fails, it removes the uploaded object before returning the error.",
  },
  {
    number: "03",
    title: "AWS results could be incomplete and tightly coupled to the UI",
    problem:
      "Textract can split a result across multiple responses using NextToken. Its deeply nested SDK response is also unsuitable as a frontend data model, while reading only the first page can silently lose extracted fields.",
    solution:
      "The backend follows every NextToken, combines the expense documents and maps the AWS response into a smaller InvoiceContent model before persistence. The frontend works with stable application fields instead of depending on Textract response types.",
  },
];

export default async function InvoiceAnalyzerCaseStudy({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <CaseStudyLayout
      locale={locale}
      title="Invoice Analyser"
      description="A full-stack invoice processing application that manages asynchronous AWS jobs and turns extracted document data into a reviewable result."
      image="/images/invoice-analyser.png"
      demo="https://file-analyses.vercel.app/analyses"
      github="https://github.com/xiaonandev/file-analyses"
    >
      <section className="bg-gray-50 px-6 py-16 dark:bg-gray-900/50 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="case-label">Problems solved</p>
          <div className="mt-10 space-y-14">
            {problems.map((item) => (
              <article key={item.number}>
                <h2 className="flex items-baseline gap-3 text-2xl font-bold tracking-tight text-gray-950 dark:text-white">
                  <span className="font-mono text-lg text-cyan-700 dark:text-cyan-400">
                    {item.number}
                  </span>
                  {item.title}
                </h2>
                <div className="mt-6 grid gap-5 leading-relaxed text-gray-600 dark:text-gray-400 sm:grid-cols-[100px_1fr]">
                  <p className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-200">
                    Problem
                  </p>
                  <p>{item.problem}</p>
                  <p className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-200">
                    Solution
                  </p>
                  <p>{item.solution}</p>
                </div>
                <div className="mt-12 h-px bg-gray-200 dark:bg-gray-800" />
              </article>
            ))}
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
