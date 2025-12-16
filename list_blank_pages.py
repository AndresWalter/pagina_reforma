import PyPDF2
import sys

# Increase recursion depth for complex PDFs
sys.setrecursionlimit(2000)

pdf_path = 'public/reforma_enviar.pdf'

try:
    with open(pdf_path, 'rb') as f:
        reader = PyPDF2.PdfReader(f)
        blank_pages = []

        for i in range(len(reader.pages)):
            page = reader.pages[i]
            text = page.extract_text().strip()
            
            # Use access to resources dictionary for faster check than full image extraction
            resources = page.get('/Resources', {})
            xobjects = resources.get('/XObject', {})
            
            has_images = len(xobjects) > 0
            has_text = len(text) > 0
            
            # Also check content stream size roughly
            try:
                contents = page.get_contents()
                if contents:
                    data = contents.get_data()
                    # A very small content stream might just be "setup" code for a blank page
                    # But let's stick to text/images for now to be safe.
                    # If it has NO text and NO images, we treat it as blank.
                    pass
            except:
                pass

            if not has_text and not has_images:
                blank_pages.append(i) # 0-indexed for internal use

        print(f"BLANK_PAGES_INDICES: {blank_pages}")
        print(f"COUNT: {len(blank_pages)}")

except Exception as e:
    print(f"Error: {e}")
