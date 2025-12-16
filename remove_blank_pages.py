import PyPDF2
import sys

# Increase recursion depth
sys.setrecursionlimit(2000)

input_pdf = 'public/reforma_enviar.pdf'
output_pdf = 'public/reforma_clean.pdf'

# User provided pages to remove (1-based)
pages_to_remove = [2, 5, 8, 11, 12, 14, 15, 18, 21]

try:
    with open(input_pdf, 'rb') as f:
        reader = PyPDF2.PdfReader(f)
        writer = PyPDF2.PdfWriter()
        
        removed_count = 0
        kept_count = 0

        for i in range(len(reader.pages)):
            current_page_num = i + 1
            
            if current_page_num in pages_to_remove:
                removed_count += 1
            else:
                writer.add_page(reader.pages[i])
                kept_count += 1

        with open(output_pdf, 'wb') as out_f:
            writer.write(out_f)

        print(f"Original pages: {len(reader.pages)}")
        print(f"Pages removed: {pages_to_remove}")
        print(f"New page count: {kept_count}")
        print(f"Saved to: {output_pdf}")

except Exception as e:
    print(f"Error: {e}")
