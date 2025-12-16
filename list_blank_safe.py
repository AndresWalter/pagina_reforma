import PyPDF2
import sys

# Increase recursion depth
sys.setrecursionlimit(2000)

pdf_path = 'public/reforma_enviar.pdf'

try:
    with open(pdf_path, 'rb') as f:
        reader = PyPDF2.PdfReader(f)
        blank_pages = []

        for i in range(len(reader.pages)):
            page = reader.pages[i]
            text = page.extract_text().strip()
            
            has_images = False
            try:
                if len(page.images) > 0:
                    has_images = True
            except:
                pass

            if len(text) == 0 and not has_images:
                blank_pages.append(i) 

        print(f"BLANK_PAGES_INDICES: {blank_pages}")

except Exception as e:
    print(f"Error: {e}")
