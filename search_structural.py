import PyPDF2
import sys

# Increase recursion depth
sys.setrecursionlimit(2000)

pdf_path = 'public/reforma_enviar.pdf' # Using original to be safe on text extraction, or clean one.
# Note: I removed pages from clean one, so clean might be better if I want to refer to pages in the final doc, 
# but original is safer for text search if I removed text by accident.
# Let's use clean one since that's what the user sees.
pdf_path = 'public/reforma_clean.pdf'

keywords = ["fondo", "cese", "colaboradores", "ultraactividad", "cuota solidaria", "independientes"]

try:
    with open(pdf_path, 'rb') as f:
        reader = PyPDF2.PdfReader(f)
        
        results = {k: [] for k in keywords}

        for i in range(len(reader.pages)):
            page = reader.pages[i]
            text = page.extract_text().lower()
            
            for k in keywords:
                if k in text:
                    # Extract a snippet around the keyword
                    idx = text.find(k)
                    start = max(0, idx - 50)
                    end = min(len(text), idx + 100)
                    snippet = text[start:end].replace('\n', ' ')
                    results[k].append(f"Page {i+1}: ...{snippet}...")

        for k, v in results.items():
            if v:
                print(f"\n--- {k.upper()} ---")
                for item in v[:3]: # Show first 3 matches
                    print(item)
            else:
                print(f"\n--- {k.upper()} (No matches) ---")

except Exception as e:
    print(f"Error: {e}")
