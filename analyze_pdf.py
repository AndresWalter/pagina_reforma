import PyPDF2

pdf_path = 'public/reforma_enviar.pdf'

try:
    with open(pdf_path, 'rb') as f:
        reader = PyPDF2.PdfReader(f)
        print(f"Total pages: {len(reader.pages)}")
        
        for i in range(min(5, len(reader.pages))):
            page = reader.pages[i]
            text = page.extract_text()
            print(f"Page {i+1} text length: {len(text.strip())}")
            print(f"Page {i+1} preview: {text.strip()[:50]}...")
            
except Exception as e:
    print(f"Error: {e}")
